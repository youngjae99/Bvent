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

bp = Blueprint("users", __name__, url_prefix="/users")

@bp.route("/<username>", methods=["GET"])
@cross_origin()

def get_username(username):
  """
  Show all the posts 
  """
  from helper import sanitize
  sanitized_username = sanitize(username)
  all_users = db.child("users").shallow().get().val()
  if (sanitized_username not in all_users):
    return jsonify({"status": "empty"}), 404
  user_info = db.child("users").child(sanitized_username).get().val()
  return jsonify(user_info), 200

@bp.route("/myself", methods=["GET"])
@cross_origin()

def get_myself():
  """
  Show all the posts 
  """
  from auth import check_userToken
  username = check_userToken() 

  if username == "invalid request":
      return {
        "status": "you don't have permission :("
    }, 403

  from helper import sanitize
  sanitized_username = sanitize(username)
  user_info = db.child("users").child(sanitized_username).get().val()
  return jsonify(user_info), 200