from io import BytesIO
from PyPDF2 import PdfFileMerger
import img2pdf
from flask import request, jsonify, send_file
import os


from img2pdfconverter import is_valid_jpeg, image_to_pdf

"""
    now i want a route similar to this but to handle pdf to pdf a conversion
"""


def jpg_to_pdf_route(app):
    @app.route('/jpg-to-pdf', methods=['POST'])
    def jpg_to_pdf_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
        images = request.files.getlist("files")
        return image_to_pdf(images)
