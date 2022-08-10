import pyrebase, csv, re, js2py

from auth import config
firebase = pyrebase.initialize_app(config)
db = firebase.database()

"""
NOTE: Requires `chmod u+x <csv file name>` before using the csv file
"""

def check_csv(rdr):
  for row in rdr:
    print(row)

def process_events():
  from helper import sanitize
  csv1 = open('events.csv', 'r')
  rdr1 = csv.reader(csv1)

  skip_lines = 2
  current_line = 1

  for line in rdr1:
    if (current_line <= skip_lines):
      current_line += 1;
      continue
    sanitized_title = sanitize(line[1])
    event_data = {
      "event_id" : line[0],
      "event_title" : line[1],
      "event_start" : line[2],  
      "event_end" : line[3],  
      "event_type" : line[4],
      "event_img" : line[5],
    }
  
    db.child("events").child(sanitized_title).set(event_data) #creates a unique key for the user 
  csv1.close()

def process_event_review():
  from helper import sanitize
  csv2 = open('event_review.csv', 'r')
  rdr2 = csv.reader(csv2)

  skip_lines = 2
  current_line = 1

  for line in rdr2:
    if (current_line <= skip_lines):
      current_line += 1;
      continue
    sanitized_title = sanitize(line[1])

    cur_date = re.sub(r'[.]+', '-', line[10])
    new_time= 0
    if (len(line[10]) > 5 and line[11 != '']):
      try:
        new_time_func =  js2py.eval_js(
          'function new_time(a, b) {new_date = new Date(a + "T" + b + ":00Z"); return new_date.getTime()}'
          )
        new_time = new_time_func(cur_date, line[11])
      except:
        print(line[10], line[11], "not good!!! error in js2py TT")
    
    subevent_data = {
      "subevent_id" : line[0],
      "event_title" : line[1],
      "subevent_presenter" : line[5],
      "subevent_info" : line[6],
      "subevent_src" : line[7],
      "subevent_date": line[10],
      "subevent_img": line[12],
      "subevent_time" : new_time
    }

    event_title = line[1]

    from helper import sanitize
    sanitized_title = sanitize(event_title)
  
    db.child("subevents").child(sanitized_title).child(line[0]).set(subevent_data) #creates a unique key for the user 
  csv2.close()

def check_js2py():
  csv2 = open('event_review.csv', 'r')
  rdr2 = csv.reader(csv2)

  skip_lines = 2
  current_line = 0

  for line in rdr2:
    current_line += 1;
    if (current_line <= skip_lines):
      continue
    if (len(line[10]) > 5 and line[11 != '']):
      cur_date = re.sub(r'[.]+', '-', line[10])
      try:
        new_time =  js2py.eval_js(
          'function new_time(a, b) {new_date = new Date(a + "T" + b + ":00Z"); return new_date.getTime()}'
          )
        print(current_line, line[10], line[11], new_time(cur_date, line[11]))
      except:
        print(current_line, line[10], line[11])
    else:
      print("empty line")

if __name__ == "__main__":
  #process_events()
  process_event_review()
    