import pyrebase, json, requests
from threading import Thread
from helper import t_receive_tx_and_update
from mySecrets import token_economy_admin_pw
from flask import Blueprint, render_template, request

portion = 0.04 #4%

#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()
bp = Blueprint("token_economy", __name__, url_prefix="/token_economy")

def get_queue():
  od_token_queue = db.child("token_queue").get().val()
  json_token_queue = json.dumps(od_token_queue)
  loaded_r = json.loads(json_token_queue)
  print(loaded_r)
  return loaded_r

@bp.route("/remove_queue_item/<queue_id>", methods=["DELETE"])
def remove_queue_item(queue_id):
  admin_pw = request.args.get("admin_pw")
  if (admin_pw != token_economy_admin_pw):
    return {"status": "admin_pw incorrect"}, 403
  queue_info = db.child("token_queue").child(queue_id).get().val()
  review_id = queue_info["review_id"]
  db.child("reviews").child(review_id).update({"txHash": "rejected"})
  db.child("token_queue").child(queue_id).remove()
  
  return {"status": "queue deleted"}, 200

@bp.route("/provide_reward", methods=["POST"])
def provide_reward():
  params = request.get_json()
  print("params", params)
  admin_pw = params["admin_pw"]
  queue_id = params["queue_id"]
  if (admin_pw != token_economy_admin_pw):
    return {"status": "admin_pw incorrect"}, 403
  reward_amount = reward(queue_id)
  if reward_amount == -1:
    return {"status": "something went wrong"}, 404
  db.child("token_queue").child(queue_id).remove()
  return {"status": "provide_reward complete", "reward_amount": reward_amount}, 200


def reward(queue_id):
  queue_info = db.child("token_queue").child(queue_id).get().val()
  wallet_address = queue_info["wallet_address"]
  review_id = queue_info["review_id"]
  subevent_id = queue_info["subevent_id"]
  reward_type = queue_info["reward_type"]
  #print(wallet_address, review_id, subevent_id, event_name, reward_type)
  if (reward_type == "reviewer"):
    #print("reward_reviewer", wallet_address, review_id)
    pool = db.child("subevents").child(subevent_id).child("reviewer_reward").get().val()
    #print("pool", pool)
    reward_amount = float(pool) * portion
    pool = pool - reward_amount
    db.child("subevents").child(subevent_id).update({"reviewer_reward": pool})  
    thread = Thread(target=t_receive_tx_and_update, 
                    args=(db, reward_amount, wallet_address, review_id,))
    thread.daemon = True
    thread.start()
    return reward_amount
  elif reward_type == "researcher":
    print("reward researcher", wallet_address, review_id)
    pool = db.child("subevents").child(subevent_id).child("researcher_reward").get().val()
    reward_amount = float(pool) * portion
    pool = pool - reward_amount
    db.child("subevents").child(subevent_id).update({"researcher_reward": pool})
    thread = Thread(target=t_receive_tx_and_update, 
                    args=(db, reward_amount, wallet_address, review_id,))
    thread.daemon = True
    thread.start()
    return reward_amount
  else:
    print("reward_type", reward_type)
    return - 1

@bp.route("", methods=["GET"])
def get_token_economy_admin_page():
  return render_template("token_queue_admin.html", token_queue=get_queue())