from flask import jsonify, request

from pdf2wordconverter import pdf_to_word


def pdf_to_word_route(app):
    @app.route('/pdf-to-word', methods=['POST'])
    def convert_pdf_to_word():
        if 'files' not in request.files:
            return jsonify({"error": "No pdf_file found"}), 400

        pdf_file = request.files['files']
        return pdf_to_word(pdf_file)
