import functools
import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import make_response
from flask import render_template
from flask import request, jsonify
from flask import session
from flask import url_for
from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash
from flask_cors import CORS, cross_origin
from flask_jwt import JWT, jwt_required, current_identity

from mySecrets import config
firebase = pyrebase.initialize_app(config)

bp = Blueprint("auth", __name__, url_prefix="/auth")
auth = firebase.auth()
db = firebase.database()

default_domain = "@my.wallet"

def check_userToken(userToken):
  try:
    decoded_token = auth.get_account_info(userToken)
    return (decoded_token["users"][0]["email"])
  except requests.exceptions.HTTPError:
    return "invalid request"
  return "invalid request"

@bp.route("/register", methods=("GET", "POST"))
@cross_origin()

def register():
  """
  Register a new user 
  """
  if request.method == "POST":
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    #print ('data from client:', request)
    params = request.get_json()
    #username = params["username"]
    address  = params["address"]
    password = "wallet"
    wallet_domain = address + default_domain
    user = auth.create_user_with_email_and_password(wallet_domain, password)

    from helper import sanitize
    initial_data = {
      "username": "bventer",
      "address": address,
      "profile_pic": 0,
      "total_coin": 0,
      "likes_left": 5
    }
    is_previous = db.child("users").child(address.lower()).get().val()
    if is_previous is not None:
      return jsonify({"status": "error: address {} already exists".format(address)}), 403
    db.child("users").child(address.lower()).set(initial_data)
    return jsonify(user)

@bp.route("/login", methods=("GET", "POST"))
@cross_origin()

def login():
  """
  Login a new user 
  """
  if request.method == "POST":  
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    #print ('data from client:', request)
    print("login is_json", request.is_json)
    if (request.is_json == False):
      return "invalid body type. needs to be json", 403
    print(request.data)
    params = json.loads(request.data, strict=False)
    username = params["username"]
    password = "wallet"
    try:
      username += default_domain
      user = auth.sign_in_with_email_and_password(username, password)
      session["idToken"] = user["idToken"]
      resp = make_response(jsonify({'status': 'Good Copy :)'}))
      resp.set_cookie('idToken', user['idToken'], samesite='Strict')
      return resp, 200
      #print(user["idToken"])
    except requests.exceptions.HTTPError:
      return jsonify({'error': 'Incorrect username or password'}), 400
    


@bp.route('/logout')
@cross_origin()
def logout():
  return jsonify({'status': 'Logged out successfully:)'}), 200