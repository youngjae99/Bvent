import pyrebase, json, requests

from flask import Blueprint
from flask import request, jsonify
from threading import Thread
from helper import sanitize, t_receive_tx_and_update

#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("like", __name__, url_prefix="/like")

#NOTE: what portion of the total commenter token pool should we give.
portion = 0.04 

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
  review_info = db.child("reviews").child(review_id).get().val()
  subevent_id = review_info['subevent_id']
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

  #4. Reward for like event, if applicable
  #NOTE: like is allowed only 5 times every day & only one like per subevent is allowed
  #NOTE: no need to verify like req.

  #verify whether already gave a like to the subevent
  did_like = db.child("users").child(s_username).child("liked_subevent").child("subevent_id").get().val()
  if did_like is not None:
    return {"status": "like complete!", "reward": "already liked another review in this subevent"}, 200

  likes_left = db.child("users").child(s_username).child("likes_left").get().val()
  reward = "requires likes_left field update"
  if likes_left is None:
    pass # defaults to the default reward val. 
  elif int(likes_left) == 0:
    reward = "likes_left is 0. No reward given for like"
  else: #provide reward for like & set sanitizing measures to prevent additional like
    #update likes_left (-1)
    updated_likes_left = int(likes_left) - 1
    db.child("users").child(s_username).update({"likes_left": updated_likes_left})
    
    #update liked_subevent
    db.child("users").child(s_username).child("liked_subevent").child(subevent_id).set(like_value)

    #after updating comment token pool, provide reward
    wallet_address = s_username.split()[0]
    print("reward commenter", wallet_address)
    pool = db.child("subevents").child(subevent_id).child("commenter_reward").get().val()
    reward_amount = float(pool) * portion
    reward = reward_amount
    pool = float(pool) - reward_amount
    db.child("subevents").child(subevent_id).update({"commenter_reward": pool})  
    thread = Thread(target=t_receive_tx_and_update, 
                    args=(db, reward_amount, wallet_address, review_id,))
    thread.daemon = True
    thread.start()

  return {"status": "like complete!", "reward": reward}, 200