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
def t_receive_tx_and_update(db, amount, toAddress, reviewId):
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