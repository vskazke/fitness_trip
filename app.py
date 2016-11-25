from flask import Flask
from flask_peewee.db import Database
from flask_mail import Mail

app = Flask(__name__)
#  app.config.from_object('config')

import views

