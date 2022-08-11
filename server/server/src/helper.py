"""
helper functions
"""

import re
def sanitize(phrase):
  return re.sub(r'[^A-Za-z0-9 ]+', ' ', phrase)