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
  if (request.args.get("topic") is not None):
    pass
  elif (request.args.get("subevent_id") is not None):
    subevent_id = request.args.get("subevent_id") 
    subevents = db.child("subevents").child(subevent_id).get()
    return subevents.val(), 200
  return {}, 200