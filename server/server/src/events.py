"""
Code to control events
"""

import pyrebase

from flask_cors import cross_origin

from flask import Blueprint
from flask import request, jsonify

from mySecrets import config
firebase = pyrebase.initialize_app(config)
db = firebase.database()

bp = Blueprint("events", __name__, url_prefix="/events")

@bp.route("/", methods=["GET"])
@cross_origin()
def index():
  """
  Show all events 
  """
  if request.method == "GET":
    reviews = db.child("events").get()
    return reviews.val(), 200

@bp.route("/<event_title>", methods=["GET"])
@cross_origin()

def event_info(event_title):
  """
  Show all the subevents of an event
  """
  import re
  sanitized_title = re.sub(r'[^A-Za-z0-9 ]+', ' ', event_title)
  subevents = db.child("subevents").child(sanitized_title).get()
  return subevents.val(), 200

@bp.route("/<event_title>/<subevent_id>", methods=["GET"])
@cross_origin()

def subevent_info(event_title, subevent_id):
  """
  Show the specific of a subevent
  """
  import re
  sanitized_title = re.sub(r'[^A-Za-z0-9 ]+', ' ', event_title)
  subevents = db.child("subevents").child(sanitized_title).child(subevent_id).get()
  return subevents.val(), 200

@bp.route("/create", methods=("GET", "POST"))
@cross_origin()

#@login_required
def create_events():
  """
  Given a user !!has privileges!!, create a new event
  """
  editable = True
  if request.method == "POST":
    if (editable == False):
      return jsonify({'status': 'error', 'message': 'Resource forbidden!'}), 403
    # autocreate id, if possible
    event_title =         request.form["event_title"]         # string
    event_start =         request.form["event_start"]         # time
    event_end =           request.form["event_end"]           # time
    event_type =          request.form["event_type"]          # string
    subevent_presenter =  request.form["subevent_presenter"]  # string
    subevent_info =       request.form["subevent_info"]       # string
    subevent_src	 =      request.form["subevent_src"]        # string
    event_img =           request.form["event_img"]           # string
    subevent_date =       request.form["subevent_date"]       # time

    import re
    sanitized_title = re.sub(r'[^A-Za-z0-9 ]+', ' ', event_title)

    event_data = {
      "event_title" : event_title,
      "event_start" : event_start,  
      "event_end" : event_end,  
      "event_type" : event_type,
      "event_img" : event_img,
    }

    subevent_data = {
      "event_title" : event_title,
      "subevent_presenter" : subevent_presenter,
      "subevent_info" : subevent_info,
      "subevent_src" : subevent_src,
      "subevent_date" : subevent_date,
    }
  
    db.child("events").child(sanitized_title).set(event_data) #creates a unique key for the user 
    db.child("subevents").child(sanitized_title).push(subevent_data) #creates a unique key for the user 

    return jsonify({'status': 'Good Copy :)'}), 200