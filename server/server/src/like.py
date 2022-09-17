import pyrebase, json, requests

from flask import Blueprint
from flask import request, jsonify
from threading import Thread
from helper import is_json_key_present, sanitize

#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("like", __name__, url_prefix="/like")

@bp.route("", methods=["POST"])
def get_or_post_review():
  """
  like 
  """
  #0. check if user is logged in. 
  try:
    userToken = request.headers.get('authorization')
    from auth import check_userToken
    user_address = check_userToken(userToken) 
    if user_address == "invalid request":
        return {
          "status": "you don't have permission :("
      }, 403
  except:
    return {
          "status": "something went wrong in auth"
      }, 403
  
  #0.5 retrieve JSON body from client
  params = request.get_json()
  review_id = params['review_id']
  like_type = params['like_type']
  like_value = 1
  if (like_type != "like" and like_type != "dislike"):
    return "invalid method, need to be like or dislike", 404

  #create an integer equ. to the like_type
  if (like_type == "dislike"):
    like_value = -1
  
  print()
  #1. Check if user owns this review OR user already liked review
  #checking is owner. if is_owner is not None, then owner, v.v.
  s_username = sanitize(user_address)
  is_owner = db.child("users").child(s_username).child("reviews").child(review_id).get().val()
  if (is_owner is not None):
    return {"status": "You are the owner"}, 200

  #checking if user has already liked the review
  has_liked = db.child("users").child(s_username).child("likes").child(review_id).get().val()
  if (has_liked is not None):
    return {"status": "You have already liked this review"}, 200
  
  #2. If not, add the user to the liked list of this review. 
  #NOTE: total # likes will be added when review is retrieved, to avoid lock issues
  db.child("reviews").child(review_id).child("likes").update({s_username: like_value})
  
  #3. Add to user that he/she had liked this review
  db.child("users").child(s_username).child("likes").update({review_id: like_value})

  return {"status": "like complete!"}, 200