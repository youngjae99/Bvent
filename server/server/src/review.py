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
      r_val = db.child("reviews").order_by_child("event_id").equal_to(subeventId).get().val()
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
    event_name =      params["event_name"] 
    timestamp =       params["timestamp"]           #
    amount          = params["amount"] 

    subevent_id = ""
    event_id = ""
    if is_json_key_present(params, "subevent_id"):
      subevent_id = params["subevent_id"]
    else:
      subevent_id = "-1"
    
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
      "event_name" : event_name,
      "subevent_id" : subevent_id,
      "event_id": event_id,
      "timestamp" : timestamp,
      "username" : db.child("users").child(sanitized_username).get().val()["username"],  
      "walletAddress" : user_address.split('@')[0],  
      "amount": amount,
      "txHash" : "updating"
    }

    try:
      res = db.child("reviews").push(data) #creates a unique key for the user 
      reviewId = res["name"]
      #keep track of which user wrote which comment
      db.child("users").child(sanitized_username).child("comments").child(reviewId).set(amount)
    except:
      return jsonify({'status': 'error occurred while pushing reivew'}), 503 

    #NOTE: check if user has totalAmount. If not, create new totalAmount. If it has it, reference it.
    #print(username)
    user_index = db.child("users").child(sanitized_username).shallow().get().val()
    updated_amount = int(amount)
    if ("coins" in user_index):
      cur_amount = db.child("users").child(sanitized_username).child("coins").get().val() 
      updated_amount = int(cur_amount) + int(amount)
    db.child("users").child(sanitized_username).child("coins").set(updated_amount)

    #start thread for tx and update for token transaction
    thread = Thread(target=t_receive_tx_and_update, args=(amount, sepUsername[0], subevent_id, reviewId,))
    thread.daemon = True
    thread.start()
    return jsonify({'status': 'Good review!', "txHash": "updating"}), 200
  else:
    return jsonify({'status': "Invalid Request"}), 405

"""
Threaded task to asynchronously receive tx and update
"""
def t_receive_tx_and_update(amount, toAddress, subevent_id, reviewId):
  #print("tx update start!", toAddress)
  import requests 
  from mySecrets import evmos_gcf
  try:
    response_data = requests.post(evmos_gcf, 
      data = {"amount": str(amount), "toAddress": toAddress}).json()
    # print(response_data)
    txHash = response_data["transactionHash"]
    db.child("reviews").child(reviewId).update({"txHash":txHash})
    #print("receive_tx_and_upload done! with txHash" , txHash, "for ", subevent_id, " ", reviewId)
  except:
    db.child("reviews").child(reviewId).update({"txHash":0})

@bp.route("", methods=["GET"])
def get_recent_review():
  pass