from flask import Flask, request, jsonify, send_file
from utils.utils import validate_file

from word2pdfconverter import word_to_pdf

app = Flask(__name__)


# def word_to_pdf_route(app):
#     @app.route('/word-to-pdf', methods=['POST'])
#     def word_to_pdf_handler():
#         if 'files' not in request.files:
#             return jsonify({"error": "No Word file provided"}), 400
#         word_files = request.files.getlist("files")
#         return word_to_pdf(word_files)

# def word_to_pdf_route(app):
#     @app.route('/word-to-pdf', methods=['POST'])
#     def word_to_pdf_handler():
#         if 'files' not in request.files:
#             return jsonify({"error": "No Word file provided"}), 400
#         word_file = request.files['files']
#         pdf_path = word_to_pdf(word_file, app.config['UPLOAD_FOLDER'])
#         return send_file(pdf_path, as_attachment=True)


# chat gpt implementation
"""""
now i want a function similar to this but for handling pdf to word conversion
"""""


def word_to_pdf_route(app):
    @app.route('/word-to-pdf', methods=['POST'])
    def convert_word_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        files = request.files['files']
        error = validate_file(files)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400
        word_file = files
        return word_to_pdf(word_file)
