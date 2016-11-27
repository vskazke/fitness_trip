import os
import yaml
import json

from flask import render_template, jsonify, abort, redirect, url_for, request
from flask_mail import Message

from app import app, mail


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


@app.route('/tour_ditails/<int:post_id>')
def tour_details():
    return render_template('ditails.html')


@app.route('/callBack', methods=['POST'])
def callBack():
    name = request.form['name']
    phone = request.form['phone']
    msg = Message("hello",
                  sender='anastacia111@yandex.ru',
                  recipients=["vskazke.info@gmail.com"],)
    msg.body = 'text body'
    msg.html = "<ul>Name: %s</li>,\
            <li>Phone: %s</li></ul>" %\
        (name, phone)
    mail.send(msg)
    return 'send'

