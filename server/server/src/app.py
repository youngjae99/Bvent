from flask import Flask, render_template, make_response, url_for, session
from flask_cors import CORS
import os
import time

app = Flask(__name__)
cors = CORS(app)
app.secret_key = "8feeef86bbe5049e9c70118e8aaf6f222e15850a7700f3a39c6e9ee05ddd5e03"
app.config['CORS_HEADERS'] = 'Content-Type'

def format_server_time():
  server_time = time.localtime()
  return time.strftime("%I:%M:%S %p", server_time)

import auth
app.register_blueprint(auth.bp)

@app.route('/')
def index():
    if 'userToken' in session:
        return f'Logged in as {session["userToken"]}'
    return 'You are not logged in'

import reviews
app.register_blueprint(reviews.bp)

import events
app.register_blueprint(events.bp)

with app.test_request_context():
    print(url_for('events.event_info', event_title='2022 ETH Denver'))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))

