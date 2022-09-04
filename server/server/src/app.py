from flask import Flask, render_template, make_response, url_for, session, request
from flask_cors import CORS, cross_origin
import os
import time
import pyrebase

from mySecrets import config, app_secret_key

app = Flask(__name__)
cors = CORS(app)
app.secret_key = app_secret_key
app.config['CORS_HEADERS'] = 'Content-Type'

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
    if 'userToken' in session:
        return f'Logged in as {session["userToken"]}', 200
    return 'You are not logged in', 200

import reviews
app.register_blueprint(reviews.bp)

import events
app.register_blueprint(events.bp)

import users
app.register_blueprint(users.bp)

import tags
app.register_blueprint(tags.bp)

with app.test_request_context():
    print(url_for('events.event_info', event_title='2022 ETH Denver'))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))

