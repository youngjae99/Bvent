"""
Code to control events
"""

import pyrebase

from flask_cors import cross_origin

from flask import Blueprint
from flask import request, jsonify, make_response

from mySecrets import config
firebase = pyrebase.initialize_app(config)
db = firebase.database()

bp = Blueprint("event", __name__, url_prefix="/events")

@bp.route("", methods=["GET"])
def get_events_slash():
  """
  Show all events 
  """    
  if (request.args.get('tags') is not None):
    try:
      tags = request.args.get('tags')
      
      reviews = db.child("eventtags").child(tags).get().val()
      if reviews is None:
        reviews = {}
      return reviews, 200
    except: #tag doesn't exist
      return {}, 200
  else:
    reviews = db.child("events").get()
    return reviews.val(), 200
@bp.route("/<event_title>", methods=["GET"])

def event_info(event_title):
  """
  Show all the subevents of an event
  """
  import re
  sanitized_title = re.sub(r'[^A-Za-z0-9 ]+', ' ', event_title)
  event_info = db.child("events").child(sanitized_title).get().val()
  print(event_info)
  subevents = db.child("subevents").order_by_child("event_title").equal_to(event_title).get().val()

  resp = make_response(jsonify({"event_info": event_info, 
                                "subevents": subevents}))
  return resp, 200

@bp.route("/<event_title>/subevents", methods=["GET"])

def subevent_info(event_title):
  """
  Show the specific of a subevent
  """
  subevents = db.child("subevents").order_by_child("event_title").equal_to(event_title).get().val()
  #hardfix for 2022 eth denver
  if type(subevents) == type([]):
    print("lists are bad, hot fix!")
    new_subevent = {}
    #hotfix for 2022 ETH Denver
    for i in range(1, len(subevents)):
      subevent_id = subevents[i]["subevent_id"]
      new_subevent[subevent_id] = subevents[i]
    return new_subevent, 200

  return subevents, 200