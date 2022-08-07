import functools
import pyrebase, json, requests

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
def index():
  """
  Show all the posts 
  """
  if request.method == "GET":
    reviews = db.child("reviews").get()
    return reviews.val(), 200

@bp.route("/create", methods=("GET", "POST"))
#@login_required
def create_reviews():
  """
  Given a user is logged in, create a new review
  """
  if request.method == "POST":
    # autocreate id, if possible
    title =       request.form["title"]       # string
    description = request.form["description"] # string
    start_time =  request.form["start_time"]  # time
    end_time =    request.form["end_time"]    # time
    location =    request.form["location"]    # string
    url =         request.form["url"]         # string
    comments =    request.form["comments"]    # map of maps
    rating =      request.form["rating"]      # int
    timeline =    request.form["timeline"]    # map of maps

    data = {
      "title" : title,
      "description" : description,
      "start_time" : start_time,
      "end_time" : end_time,
      "location" : location,
      "url" : url,
      "comments" : comments,
      "rating" : rating,
      "timeline" : timeline
    }
    result = db.child("reviews").push(data) #creates a unique key for the user 

    print(result["name"])

    return jsonify(result), 200