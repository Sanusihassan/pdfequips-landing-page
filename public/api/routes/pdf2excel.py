import os
import tempfile
from flask import jsonify, request, send_file
from io import BytesIO
from utils.utils import validate_file
from pdf2excel_converter import pdf_to_excel


def pdf_to_excel_route(app):
    @app.route('/pdf-to-excel', methods=['POST'])
    def convert_pdf_to_excel():
        if 'files' not in request.files:
            return jsonify({"error": "No PDF file provided"}), 400
        files = request.files.getlist('files')
        error = validate_file(files)
        if error:
            response = jsonify(error)
            response.headers['Content-Type'] = 'application/json'
            return jsonify({"error": response}), 400
        pdf_file = request.files['files']

        # Save the PDF file to a temporary location
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
            pdf_file.save(temp_pdf.name)
            temp_pdf.close()  # Close the temporary file
            excel_data = pdf_to_excel(temp_pdf.name)
            os.unlink(temp_pdf.name)  # Unlink the temporary file

        # Send the Excel data as an attachment
        return send_file(BytesIO(excel_data), download_name="output.xlsx", as_attachment=True)
