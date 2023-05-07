from flask import request, jsonify
from pdfkit import from_file

from html2pdf_converter import html_to_pdf


def html_to_pdf_route(app):
    @app.route('/html-to-pdf', methods=['POST'])
    def convert_html_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No html_file found"}), 400

        html_file = request.files['files']
        # Get the base_url from the form data
        base_url = request.form.get('base_url', '')
        return html_to_pdf(html_file)
