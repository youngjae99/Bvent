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

config = {
  "apiKey": "AIzaSyCOSjb3q8glt7sHROPtfTnQHeSXCSsxDFo",
  "authDomain": "bvent-seoul.firebaseapp.com",
  "databaseURL": "https://bvent-seoul-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": "bvent-seoul.appspot.com",
}

firebase = pyrebase.initialize_app(config)

bp = Blueprint("auth", __name__, url_prefix="/auth")

auth = firebase.auth()
db = firebase.database()

default_domain = "@my.wallet"

def check_userToken():
  if (session.get("userToken") is not None):
    userToken = session["userToken"]
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
    username = request.form["username"]
    password = ""
    loginType = request.form["loginType"]
    try:
      if loginType == "wallet":
        password = "wallet"
        username += default_domain
      elif loginType == "email":
        password = request.form["password"]
      user = auth.create_user_with_email_and_password(username, password)
      from helper import sanitize
      sanitized_username = sanitize(username)
      db.child("users").child(sanitized_username).child("totalAmount").set(0)
    except:
      return jsonify({'error': 'Incorrect username or password'}), 400
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
    username = request.form["username"]
    password = ""
    loginType = request.form["loginType"]
    try:
      if loginType == "wallet":
        password = "wallet"
        username += default_domain
      elif loginType == "email":
        password = request.form["password"]
      else:
        return jsonify({'error': 'Invalid loginType field'}), 400
      user = auth.sign_in_with_email_and_password(username, password)
      session['userToken'] = user["idToken"]
       
    except requests.exceptions.HTTPError:
      return jsonify({'error': 'Incorrect username or password'}), 400
    return jsonify({'status': 'Good Copy :)'}), 200


@bp.route('/logout')
@cross_origin()
def logout():
  check_userToken()
  session.pop('userToken', None)
  return jsonify({'status': 'Logged out successfully:)'}), 200