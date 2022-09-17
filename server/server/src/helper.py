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