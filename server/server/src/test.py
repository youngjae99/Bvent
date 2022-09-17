import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint, render_template, url_for
from flask import request, jsonify


#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("test", __name__, url_prefix="/test")

@bp.route("", methods=["GET"])
def get_test_page():
  """
  Show all events 
  """
  return render_template("test_page.html")

