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

config = {
  "apiKey": "AIzaSyCOSjb3q8glt7sHROPtfTnQHeSXCSsxDFo",
  "authDomain": "bvent-seoul.firebaseapp.com",
  "databaseURL": "https://bvent-seoul-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": "bvent-seoul.appspot.com",
}

firebase = pyrebase.initialize_app(config)

bp = Blueprint("auth", __name__, url_prefix="/auth")

auth = firebase.auth()

@bp.route("/register", methods=("GET", "POST"))
def register():
  """
  Register a new user 
  """
  if request.method == "POST":
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    #print ('data from client:', request)

    username = request.form["username"]
    password = request.form["password"]
    try:
      user = auth.create_user_with_email_and_password(username, password)
    except:
      return jsonify({'error': 'Incorrect username or password'}), 400
    return jsonify(user)

@bp.route("/login", methods=("GET", "POST"))
def login():
  """
  Login a new user 
  """
  if request.method == "POST":
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    print ('data from client:', request)

    username = request.form["username"]
    password = request.form["password"]
    try:
       user = auth.sign_in_with_email_and_password(username, password)
    except requests.exceptions.HTTPError:
      return jsonify({'error': 'Incorrect username or password'}), 400
    return jsonify({'status': 'Good Copy :)'}), 200