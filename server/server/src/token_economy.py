import pyrebase, json, requests
from threading import Thread
from helper import t_receive_tx_and_update

portion = 0.04 #4%



#initalize firebase
from mySecrets import config
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

def reward_researcher(wallet_address, review_id):
    thread = Thread(target=t_receive_tx_and_update, args=(amount, sepUsername[0], subevent_id, reviewId,))
    thread.daemon = True
    thread.start()
