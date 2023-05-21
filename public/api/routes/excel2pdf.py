from flask import jsonify, request, send_file
from excel2pdf_converter import excel_to_pdf
from utils.utils import validate_file


def excel_to_pdf_route(app):
    @app.route('/excel-to-pdf', methods=['POST'])
    def convert_excel_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        file = request.files['files']
        error = validate_file(file)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400

        excel_file = file
        pdf_output = excel_to_pdf(excel_file)
        return send_file(pdf_output, download_name="output.pdf", as_attachment=True)
