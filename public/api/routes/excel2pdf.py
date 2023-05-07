from flask import jsonify, request, send_file
from excel2pdf_converter import excel_to_pdf


def excel_to_pdf_route(app):
    @app.route('/excel-to-pdf', methods=['POST'])
    def convert_excel_to_pdf():
        if 'files' not in request.files:
            return jsonify({"error": "No excel_file found"}), 400

        excel_file = request.files['files']
        pdf_output = excel_to_pdf(excel_file)
        return send_file(pdf_output, download_name="output.pdf", as_attachment=True)
