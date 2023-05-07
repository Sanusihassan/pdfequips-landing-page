from flask import jsonify, request
from pdf2pptx_converter import pdf_to_ppt


def pdf_to_ppt_route(app):
    @app.route('/pdf-to-powerpoint', methods=['POST'])
    def pdf_to_pptx_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        pdf_files = request.files.getlist('files')
        return pdf_to_ppt(pdf_files[0])
