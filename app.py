from flask import Flask
from flask_peewee.db import Database
from flask_mail import Mail

app = Flask(__name__)
mail = Mail(app)

app.config.from_object('config')
mail = Mail(app)

import views

