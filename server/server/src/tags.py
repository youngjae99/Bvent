import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import request, jsonify


#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("tags", __name__, url_prefix="/tags")

@bp.route("/past", methods=["GET"])
@cross_origin()
def events_past():
  """
  Show all events 
  """
  if request.method == "GET":
    reviews = db.child("eventtags").child("past").get()
    return reviews.val(), 200

@bp.route("/current", methods=["GET"])
@cross_origin()
def events_current():
  """
  Show all events 
  """
  if request.method == "GET":
    reviews = db.child("eventtags").child("current").get()
    return reviews.val(), 200

@bp.route("/future", methods=["GET"])
@cross_origin()
def events_future():
  """
  Show all events 
  """
  if request.method == "GET":
    reviews = db.child("eventtags").child("future").get()
    return reviews.val(), 200