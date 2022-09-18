import pyrebase, json, requests

from flask_cors import cross_origin
from flask import Blueprint
from flask import request, jsonify
from threading import Thread
from helper import is_json_key_present

#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
#end of firebase init

bp = Blueprint("review", __name__, url_prefix="/review")

@bp.route("", methods=["GET", "POST"])
def get_or_post_review():
  """
  GET or POST a review for a subevent
  """
  #print("hello?")
  if (request.method == "GET"):
    reqType = "wrong"
    subeventId =  request.args.get('subevent_id')
    eventId =  request.args.get('event_id')
    if subeventId is not None:
      reqType = "subevent"
    elif eventId is not None:
      reqType = "event"
    if reqType == "wrong":
      return "need to specify either subevent_id or event_id", 404
    
    recent = request.args.get('recent')
    if recent is not None:
      recent = int(recent)
    #all_reviews = db.child("reviews").shallow().get().val()
    #print("args:", subeventId, recent)
    r_val = {}
    if reqType == "subevent":
      if subeventId != "0":
        r_val = db.child("reviews").order_by_child("subevent_id").equal_to(subeventId).get().val()
      else: #id = 0 is recent review
        r_val = db.child("reviews").order_by_child("timestamp").limit_to_last(recent).get().val()
    elif reqType == "event":
      r_val = db.child("reviews").order_by_child("event_id").equal_to(eventId).get().val()
    #print(r_val)
    if (r_val == []):
      r_val = {}
    return r_val, 200

  #"""POST"""
  elif request.method == "POST":
    params = request.get_json()
    try:
      #userToken = params["idToken"] 
      userToken = request.headers.get('authorization')
      from auth import check_userToken
      user_address = check_userToken(userToken) 
      if user_address == "invalid request":
          return {
            "status": "you don't have permission :("
        }, 403
    except:
      return {
            "status": "you don't have permission :("
        }, 403

    # autocreate id, if possible
    review_content =  params["review_content"]     # string
    event_title =      ""
    timestamp =       params["timestamp"]           #
    subevent_id = ""
    event_id = ""

    if is_json_key_present(params, "subevent_id"):
      subevent_id = params["subevent_id"]
      event_title = db.child("subevents").child(subevent_id).child("event_title").get().val()
      event_id = "-1"
    else:
      subevent_id = "-1"
      event_id = params["event_id"]
      event_info = db.child("events").order_by_child("event_id").equal_to(event_id).get().val()
      event_info = list(json.loads(json.dumps(event_info)).keys())
      print(event_info, event_id, type(event_id))
      event_title = event_info[0]

    if is_json_key_present(params, "event_id"):
      event_id = params["event_id"]
    else:
      event_id = "-1"

    #print (subevent_id, event_id)
    
    from helper import sanitize
    sanitized_username = sanitize(user_address)
    sepUsername = sanitized_username.split(' ')
    if (sepUsername[1] != "my" or sepUsername[2] != "wallet"):
      return {
        "status": "error",
        "message": "User must have a 'wallet'.",
      }, 400

    data = {
      "review_content" : review_content,
      "event_title" : event_title,
      "subevent_id" : subevent_id,
      "event_id": event_id,
      "timestamp" : timestamp,
      "username" : db.child("users").child(sanitized_username).get().val()["username"],  
      "walletAddress" : user_address.split('@')[0],  
      "txHash" : "updating"
    }

    try:
      res = db.child("reviews").push(data) #creates a unique key for the user 
      review_id = res["name"]
      #keep track of which user wrote which comment
      db.child("users").child(sanitized_username).child("reviews").child(review_id).set(timestamp)

      #queue up token in incomplete 
    except:
      return jsonify({'status': 'error occurred while pushing reivew'}), 503 
    
    #rewards. event review doesn't get rewards!
    
    if (subevent_id != "-1"):
      reward_type = "researcher"

      try:
        resp = requests.get(review_content)
        if resp.status_code == 200:
          reward_type = "researcher"
        else:
          reward_type = "reviewer"
      except:
        reward_type = "reviewer"
    
      queue_data = {
        "review_id": review_id,
        "reward_type": reward_type,
        "wallet_address": sepUsername[0],
        "event_title": event_title,
        "subevent_id": subevent_id
      }
      db.child("token_queue").push(queue_data)
      return jsonify({'status': 'Good review!', "txHash": "updating"}), 200
    return jsonify({'status': 'Good review!', "txHash": "noTxHash for review"}), 200
   
@bp.route("/<review_id>", methods=["GET"])
def get_review_by_review_id(review_id):
  return db.child("reviews").child(review_id).get().val()