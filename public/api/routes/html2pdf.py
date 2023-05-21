from flask import request, jsonify
from pdfkit import from_file

from html2pdf_converter import html_to_pdf
from utils.utils import validate_file


def html_to_pdf_route(app):
    @app.route('/html-to-pdf', methods=['POST'])
    def convert_html_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        file = request.files['files']
        error = validate_file(file)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400

        html_file = file
        # Get the base_url from the form data
        base_url = request.form.get('base_url', '')
        return html_to_pdf(html_file)
