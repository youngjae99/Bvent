from flask import Flask, render_template, make_response, url_for
import os
import time

app = Flask(__name__)

def format_server_time():
  server_time = time.localtime()
  return time.strftime("%I:%M:%S %p", server_time)

@app.route('/')
def index():
    context = { 'server_time': format_server_time() }
    template = render_template('index.html', context=context)
    response = make_response(template)
    response.headers['Cache-Control'] = 'public, max-age=300, s-maxage=600'
    return response

import auth
app.register_blueprint(auth.bp)

import reviews
app.register_blueprint(reviews.bp)

import events
app.register_blueprint(events.bp)

with app.test_request_context():
    print(url_for('events.event_info', event_title='2022 ETH Denver'))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))

