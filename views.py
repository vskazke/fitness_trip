import os
import yaml
import json

from flask import render_template, jsonify, abort, redirect, url_for, request
from flask_mail import Message

from app import app, mail

DIRNAME = './content/tours'
IMG_DIR = './images'


@app.route('/')
def index():
    tours = []
    for filename in os.listdir(DIRNAME):
        filename = os.path.join(DIRNAME, filename)
        print(filename)
        with open(filename) as f:
            tour = yaml.load(f)
        tour['slug'] = os.path.split(filename)[-1][:-5]
        image = os.path.join(IMG_DIR, tour['slug'] + '.jpg')
        tours.append(tour)
        tours.sort(key=lambda x: x['created'])
    return render_template('index.html', tours=tours, image=image)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


@app.route('/tour_ditails/<tour>')
def tour_details(tour):
    filename = os.path.join(DIRNAME, tour + '.yaml')
    image = os.path.join(IMG_DIR, tour + '.jpg')
    print(image)
    if not os.path.exists(filename):
        abort(404)
    with open(filename) as f:
        print(filename)
        tour = yaml.load(f)
    return render_template('details.html', tour=tour, image=image)


@app.route('/callBack', methods=['POST'])
def callBack():
    name = request.form['name']
    phone = request.form['phone']
    msg = Message("hello",
                  sender='anastacia111@yandex.ru',
                  recipients=["naim.fruit@gmail.com"],)
    msg.body = 'text body'
    msg.html = "<ul>Name: %s</li>,\
            <li>Phone: %s</li></ul>" %\
        (name, phone)
    mail.send(msg)
    return 'send'

