from flask import Flask, render_template, make_response, url_for, session, request
from flask_cors import CORS, cross_origin
import os
import time
import pyrebase

from mySecrets import config, app_secret_key

app = Flask(__name__)
#app.config['SESSION_COOKIE_SECURE']  = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'
app.secret_key = app_secret_key
app.config['SECRET_KEY'] = 'the quick brown tig jumps over the lazy   dog'
app.config['CORS_HEADERS'] = ['Content-Type']

cors = CORS(app, origins=["https://www.bventdao.xyz/",
                 "https://bvent-youngjae99.vercel.app/",
                 "chrome-extension://laookkfknpbbblfpciffpaejjkokdgca",
                 "http://localhost:8080"],
    supports_credentials=True)

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

def format_server_time():
  server_time = time.localtime()
  return time.strftime("%I:%M:%S %p", server_time)

import auth
app.register_blueprint(auth.bp)


@app.route('/')
def index():
    session['userToken'] = "hello world!"
    if 'userToken' in session:
        return f'Logged in as {session["userToken"]}', 200
    return 'You are not logged in', 200

@app.route("/events", methods=["GET"])
@cross_origin()
def get_events():
  """
  Show all events 
  """
  if request.method == "GET":
    reviews = db.child("events").get()
    return reviews.val(), 200

@app.after_request
def creds(response):
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

import review
app.register_blueprint(review.bp)

import event
app.register_blueprint(event.bp)

import user
app.register_blueprint(user.bp)

import tags
app.register_blueprint(tags.bp)

import subevent
app.register_blueprint(subevent.bp)

import test
app.register_blueprint(test.bp)

import like
app.register_blueprint(like.bp)

import token_economy
app.register_blueprint(token_economy.bp)

@app.context_processor
def utility_functions():
    def print_in_console(message):
        print(str(message))

    return dict(mdebug=print_in_console)


with app.test_request_context():
    print(url_for('event.event_info', event_title='2022 ETH Denver'))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))

