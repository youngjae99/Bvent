"""
helper functions
"""

import re
def sanitize(phrase):
  return re.sub(r'[^A-Za-z0-9 ]+', ' ', phrase)

def is_json_key_present(json, key):
    try:
        buf = json[key]
    except KeyError:
        return False

    return True

"""
Threaded task to asynchronously receive tx and update
"""
def t_receive_tx_and_update(db, reward_type, amount, toAddress, reviewId):
  #print("tx update start!", toAddress, amount)
  import requests 
  from mySecrets import evmos_gcf
  total_coin = db.child("users").child(toAddress).child("total_coin").get().val()
  total_coin += amount
  db.child("users").child(toAddress).update({"total_coin": total_coin})
  response_data = ""
  try:
    response_data = requests.post(evmos_gcf, 
      data = {"amount": str(amount), "toAddress": toAddress}).json()
  except:
    db.child("reviews").child(reviewId).update({"txHash":0})
    return
  txHash = response_data["transactionHash"]
  db.child("reviews").child(reviewId).update({"txHash":txHash})
  tx_history_data = {
    "txHash": txHash,
    "amount": amount,
    "reward_type": reward_type,
    "review_id": reviewId,
  }
  db.child("users").child(toAddress).child("tx_hist").push(tx_history_data)
  print("receive_tx_and_upload done: ", txHash, amount, toAddress, reviewId)
  