import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import request, jsonify, make_response
from threading import Thread

#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("subevent", __name__, url_prefix="/subevent")


@bp.route("", methods=["GET"])
def get_subevent():
  """
  Show all events 
  """
  import re
  event_title = request.args.get("event")
  if event_title == None:
    return "invalid request", 405
  sanitized_title = re.sub(r'[^A-Za-z0-9 ]+', ' ', event_title)
  if (request.args.get("topic") is not None):
    pass
  elif (request.args.get("subevent_id") is not None):
    subevent_id = request.args.get("subevent_id") 
    subevents = db.child("subevents").child(sanitized_title).child(subevent_id).get()
    return subevents.val(), 200
  else:
    event_info = db.child("events").child(sanitized_title).get().val()
    #print(event_info)
    subevents = db.child("subevents").child(sanitized_title).get().val()
    resp = make_response(jsonify({"event_info": event_info, 
                                "subevents": subevents}))
    return resp, 200