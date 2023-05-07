from flask import Flask, render_template, send_from_directory
from jinja2 import TemplateNotFound


import os

cwd = os.getcwd()

def get_routes_handler(app):
    @app.route('/', methods=['GET'])
    def index():
        try:
            return send_from_directory(cwd + "../../", 'index.html')
        except TemplateNotFound:
            return "404 Not Found", 404
    
    @app.route('/logo.png', methods=['GET'])
    def serve_all_files(path):
        try:
            return send_from_directory(cwd + "../../", path)
        except TemplateNotFound:
            return "404 Not Found", 404
    
    @app.route('/_next/<path:path>', methods=['GET'])
    def serve_static_files(path):
        try:
            return send_from_directory(cwd + "../../_next", path)
        except TemplateNotFound:
            return "404 Not Found", 404
        
    @app.route('/<path:path>', methods=['GET'])
    def serve_static(path):
        try:
            return send_from_directory(cwd + "../../", path + '.html')
        except TemplateNotFound:
            return "404 Not Found", 404
