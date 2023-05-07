from flask import jsonify, request
from pdf2pdfA_converter import pdf_to_pdfa


def pdf_to_pdfa_route(app):
    @app.route('/pdf-to-pdf-a', methods=['POST'])
    def pdf_to_pdfa_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        pdf_files = request.files.getlist('files')
        return pdf_to_pdfa(pdf_files[0])
