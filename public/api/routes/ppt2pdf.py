from flask import request, jsonify
# from pptx import Presentation
from reportlab.pdfgen import canvas

from powerpoint2pdfconverter import ppt_to_pdf

"""
    now i want a function similar to this to use the html_to_pdf function
"""


def ppt_to_pdf_route(app):
    @app.route('/powerpoint-to-pdf', methods=['POST'])
    def convert_ppt_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No ppt_file found"}), 400

        ppt_file = request.files['files']
        return ppt_to_pdf(ppt_file)
