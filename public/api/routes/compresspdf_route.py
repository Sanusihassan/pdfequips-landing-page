import tempfile
from flask import jsonify, request, send_file
from tools.compress_pdf_tool import compress_pdf


def compress_pdf_route(app):
    @app.route('/compress-pdf', methods=['POST'])
    def compress_pdf_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400

        file = request.files['files']
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        file.save(temp_file.name)

        try:
            compressed_file = compress_pdf(temp_file.name)
            return send_file(compressed_file, download_name='compressed.pdf', as_attachment=True)
        except FileNotFoundError as err:
            return jsonify({"error": str(err)}), 404
        except ValueError as err:
            return jsonify({"error": str(err)}), 400
