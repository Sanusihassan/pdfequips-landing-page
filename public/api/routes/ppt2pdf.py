from flask import request, jsonify
# from pptx import Presentation
from reportlab.pdfgen import canvas
from utils.utils import validate_file

from powerpoint2pdfconverter import ppt_to_pdf

"""
    now i want a function similar to this to use the html_to_pdf function
"""


def ppt_to_pdf_route(app):
    @app.route('/powerpoint-to-pdf', methods=['POST'])
    def convert_ppt_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        files = request.files['files']
        error = validate_file(files)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400
        ppt_file = files
        return ppt_to_pdf(ppt_file)
