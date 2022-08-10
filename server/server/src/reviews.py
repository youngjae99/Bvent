import functools
import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import flash
from flask import g
from flask import redirect
from flask import render_template
from flask import request, jsonify
from flask import session
from flask import url_for
from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash

#initalize firebase
from auth import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("reviews", __name__, url_prefix="/reviews")

@bp.route("/", methods=["GET"])
@cross_origin()

def index():
  """
  Show all the posts 
  """
  if request.method == "GET":
    reviews = db.child("reviews").get()
    return reviews.val(), 200

@bp.route("/create", methods=("GET", "POST"))
@cross_origin()

#@login_required
def create_reviews():
  """
  Given a user is logged in, create a new review
  """
  if request.method == "POST":
    from auth import check_userToken
    username = check_userToken() 

    if username == "invalid request":
        return {
          "status": "you don't have permission :("
      }, 403

    # autocreate id, if possible
    review_content =  request.form["review_content"]     # string
    review_title   =  request.form["review_title"]
    event_name =      request.form["event_name"] 
    subevent_id =     request.form["subevent_id"] # time
    timestamp =       request.form["timestamp"]           #
    username =        username                    # time

    amount = 5
    txHash = 533

    data = {
      "review_content" : review_content,
      "review_title" : review_title,
      "event_name" : event_name,
      "subevent_id" : subevent_id,
      "timestamp" : timestamp,
      "username" : username,
      "amount": amount,
      "txHash" : txHash
    }

    from helper import sanitize
    sanitized_username = sanitize(username)

    try:
      res = db.child("reviews").child(subevent_id).push(data) #creates a unique key for the user 
      reviewId = res["name"]
      #keep track of which user wrote which comment
      db.child("users").child(sanitized_username).child("comments").push(reviewId) 
      return jsonify({'status': 'Good review!'}), 200
    except:
      return jsonify({'status': 'error occurred while pushing reivew'}), 503