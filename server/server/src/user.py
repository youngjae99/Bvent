import profile
import pyrebase, json, requests
import os
import tempfile

from flask_cors import cross_origin
from flask import Blueprint, session
from flask import request, jsonify, make_response

from helper import sanitize


#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
storage = firebase.storage()
#end of firebase init

bp = Blueprint("user", __name__, url_prefix="/user")

@bp.route("/<username>", methods=["GET"])
@cross_origin()

def get_username(username):
  """
  Show all the posts 
  """
  from helper import sanitize
  sanitized_username = sanitize(username).lower().split()[0]  
  print(sanitized_username)
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
  idToken = ""
  #idToken = session['idToken']
  idToken = request.headers.get('authorization')
  #print(idToken)
  username = check_userToken(idToken) 

  if username == "invalid request":
      return {
        "status": "you don't have permission :(",
        "cookie": request.cookies.get('idToken'),
    }, 403

  from helper import sanitize
  sanitized_username = sanitize(username).split(' ')[0]
  user_info = db.child("users").child(sanitized_username).get().val()
  resp = make_response(user_info)
  return resp, 200
  
@bp.route("/myself/tx_hist", methods=["GET"])
def get_my_tx_hist():

  """
  Show all the posts 
  """
  from auth import check_userToken
  idToken = ""
  #idToken = session['idToken']
  idToken = request.headers.get('authorization')
  #print(idToken)
  username = check_userToken(idToken) 

  if username == "invalid request":
      return {
        "status": "you don't have permission :(",
        "cookie": request.cookies.get('idToken'),
    }, 403

  from helper import sanitize
  sanitized_username = sanitize(username).split(' ')[0]
  user_info = db.child("users").child(sanitized_username).child("tx_hist").get().val()
  if user_info is None:
    user_info = {}
  resp = make_response(user_info)
  return resp, 200

@bp.route("/myself/profile_pic", methods=["POST"])
@cross_origin()

def post_profile_pic():
  """
  Show all the posts 
  """
  from auth import check_userToken
  idToken = request.headers.get('authorization')
  #idToken = session["idToken"]
  username = check_userToken(idToken) 

  if username == "invalid request":
      return {
        "status": "you don't have permission :("
    }, 403

  #get size of file
  try:
    print(request.files['profile_pic'])
  except:
    sanitized_username = sanitize(username).split(' ')[0]
    db.child("users").child(sanitized_username).child("profile_pic").remove()
    return {"status": "delete success", "url": "#"}, 200
  request.files['profile_pic'].save('/tmp/foo')
  size = os.stat('/tmp/foo').st_size
  #print("filesize", size)

  if (size > 1100000): # about 1mb
    return "file size too large", 403

  sanitized_username = sanitize(username).split(' ')[0]  #NOTE, change req.
  storage.child("images").child(sanitized_username).child("profile_pic").put('/tmp/foo') 
  pic_url = storage.child("images").child(sanitized_username).child("profile_pic").get_url(None)
  db.child("users").child(sanitized_username).update({'profile_pic': pic_url})
  return {"status": "success", "url": pic_url}, 200
 
@bp.route("/myself/update_info", methods=["POST"])
@cross_origin()

def update_my_info():
  """
  Show all the posts 
  """
  from auth import check_userToken
  idToken = request.headers.get('authorization')
  #idToken = session["idToken"]
  username = check_userToken(idToken) 

  if username == "invalid request":
      return {
        "status": "you don't have permission :("
    }, 403

  from helper import sanitize
  sanitized_username = sanitize(username).split(' ')[0] #NOTE, change req.
  #print(username, sanitized_username)
  params = request.get_json()
  bio = params["bio"]
  location = params["location"]
  new_username = params["username"]
  db.child("users").child(sanitized_username).update(
    {'bio': bio, 
    'location': location,
    "username": new_username})

  return {"status": "success"}, 200
 
from mySecrets import token_economy_admin_pw
@bp.route("/reset_user_likes_left", methods=["UPDATE"])
def reset_user_likes_left():
  admin_pw = request.args.get("admin_pw")
  if (admin_pw is None or admin_pw != token_economy_admin_pw):
    return {"status": "admin_pw incorrect"}, 403
  all_users = db.child("users").get()
  for user in all_users.each():
    user_key = user.key()
    db.child("users").child(user_key).update({"likes_left": 5})
  return {"status": "success"}, 200