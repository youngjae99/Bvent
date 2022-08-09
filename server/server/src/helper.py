"""
helper functions
"""

import web3
infuraKey = '172eff2ae22a4d4096cbbd73ddcf60ef'


import re
def sanitize(phrase):
  return re.sub(r'[^A-Za-z0-9 ]+', ' ', phrase)