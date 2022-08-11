import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import request, jsonify


#initalize firebase
from auth import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("reviews", __name__, url_prefix="/reviews")

@bp.route("/", methods=["GET"])
@cross_origin()

def index():
  """
  Show all the posts 
  """
  if request.method == "GET":
    reviews = db.child("reviews").get()
    return reviews.val(), 200

@bp.route("/<subevent_id>", methods=["GET"])
@cross_origin()

def get_review(subevent_id):
  """
  Get a review for a subevent
  """
  all_reviews = db.child("reviews").shallow().get().val()
  if (subevent_id not in all_reviews):
    return jsonify({"": ""}), 200
  reviews = db.child("reviews").child(subevent_id).get()
  return reviews.val(), 200
  

@bp.route("/create", methods=("GET", "POST"))
@cross_origin()

#@login_required
def create_reviews():
  """
  Given a user is logged in, create a new review
  """
  if request.method == "POST":
    from auth import check_userToken
    username = check_userToken() 

    if username == "invalid request":
        return {
          "status": "you don't have permission :("
      }, 403

    # autocreate id, if possible
    review_content =  request.form["review_content"]     # string
    review_title   =  request.form["review_title"]
    event_name =      request.form["event_name"] 
    subevent_id =     request.form["subevent_id"] # time
    timestamp =       request.form["timestamp"]           #
    amount          = request.form["amount"] 
    username        = username                    # time

    from helper import sanitize
    sanitized_username = sanitize(username)
    sepUsername = sanitized_username.split(' ')
    if (sepUsername[1] != "my" or sepUsername[2] != "wallet"):
      return {
        "status": "error",
        "message": "User must have a 'wallet'.",
      }, 400
    walletAddress = sepUsername[0]

    import requests 
    response_data = requests.post("https://hello-wallet-2rc7jznmhq-du.a.run.app", 
      data = {"amount": str(amount), "toAddress": sepUsername[0]}).json()
    # print(response_data)
    txHash = response_data["transactionHash"]

    data = {
      "review_content" : review_content,
      "review_title" : review_title,
      "event_name" : event_name,
      "subevent_id" : subevent_id,
      "timestamp" : timestamp,
      "username" : username,  
      "amount": amount,
      "txHash" : txHash
    }

    try:
      res = db.child("reviews").child(subevent_id).push(data) #creates a unique key for the user 
      reviewId = res["name"]
      #keep track of which user wrote which comment
      db.child("users").child(sanitized_username).child("comments").child(reviewId).set(amount)
    except:
      return jsonify({'status': 'error occurred while pushing reivew'}), 503
    cur_amount = db.child("users").child(sanitized_username).child("totalAmount").get().val() 
    #print(cur_amount)
    updated_amount = int(cur_amount) + int(amount)
    db.child("users").child(sanitized_username).child("totalAmount").set(updated_amount)
    return jsonify({'status': 'Good review!', "txHash": txHash}), 200