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
    content =         request.form["content"]     # string
    event_name =      request.form["event_name"] 
    subevent_id =     request.form["subevent_id"] # time
    timestamp =       request.form["timestamp"]           #
    username =        username                    # time

    data = {
      "content" : content,
      "event_name" : event_name,
      "subevent_id" : subevent_id,
      "timestamp" : timestamp,
      "username" : username,
    }

    from helper import sanitize
    sanitized_username = sanitize(username)

    try:
      db.child("reviews").child(sanitized_username).push(data) #creates a unique key for the user 
      return jsonify({'status': 'Good review!'}), 200
    except:
      return jsonify({'status': 'error occurred while pushing reivew'}), 503