import tempfile
from flask import jsonify, request, send_file
from tools.merge_pdf_tool import merge_pdfs


def merge_pdfs_route(app):
    @app.route('/merge-pdf', methods=['POST'])
    def merge_pdfs_handler():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF files provided"}), 400
        pdf_files = []
        for file in request.files.getlist('files'):
            temp_file = tempfile.NamedTemporaryFile(delete=False)
            file.save(temp_file.name)
            pdf_files.append(temp_file.name)
        # pdf_files = request.files.getlist('files')
        try:
            merged_pdf = merge_pdfs(pdf_files)
            return merged_pdf
        except FileNotFoundError as err:
            return jsonify({"error": str(err)}), 404
        except TypeError as err:
            return jsonify({"error": str(err)}), 400
