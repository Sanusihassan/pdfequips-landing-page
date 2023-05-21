from io import BytesIO
from PyPDF2 import PdfFileMerger
import img2pdf
from flask import request, jsonify, send_file
import os


from img2pdfconverter import image_to_pdf
from utils.utils import validate_file

"""
    now i want a route similar to this but to handle pdf to pdf a conversion
"""


def jpg_to_pdf_route(app):
    @app.route('/jpg-to-pdf', methods=['POST'])
    def jpg_to_pdf_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        file = request.files['files']
        error = validate_file(file)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400
        images = request.files.getlist("files")
        return image_to_pdf(images)
