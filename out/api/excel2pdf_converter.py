import os
import tempfile
import subprocess
from flask import jsonify, send_file
import zipfile

"""
    i want a similar funciton to this called html_to_pdf_multiple which instead converts html files to pdfs
    using the same approach i.e using soffice, html file types are: .html and .htm
"""

def excel_to_pdf_multiple(excel_files):
    # Create a temporary directory for the zip file
    with tempfile.TemporaryDirectory() as tempdir:
        zip_path = os.path.join(tempdir, "converted_files.zip")
        with zipfile.ZipFile(zip_path, "w") as zipf:
            for excel_file in excel_files:
                with tempfile.NamedTemporaryFile(suffix=".xlsx", delete=False) as temp:
                    excel_file.seek(0)  # Move the file pointer to the beginning
                    temp.write(excel_file.read())
                    temp_path = temp.name

                output_dir = tempfile.gettempdir()
                pdf_file = os.path.join(output_dir, os.path.basename(temp_path).replace(".xlsx", ".pdf").replace(".xls", ".pdf"))

                subprocess.run(["soffice", "--headless", "--convert-to", "pdf", temp_path, "--outdir", output_dir])
                os.remove(temp_path)

                # if not os.path.exists(pdf_file):
                #     return jsonify({"error": "Failed to convert Excel file to PDF"}), 500 # type: ignore

                zipf.write(pdf_file, os.path.relpath(pdf_file, output_dir))
                os.remove(pdf_file)  # Remove the temporary PDF file

        # Return the zip file
        return send_file(zip_path, as_attachment=True, mimetype='application/zip', download_name="converted_files.zip")



"""
    i want a similar funciton called pdf_to_excel which takes a pdf file and using the same approach or any other method.
    it converts the file to excel. and i'm using it in my flask app like so: pdf_to_excel(request.files.getlist('files')[0])
"""
def excel_to_pdf(excel_files):
    for excel_file in excel_files:
        with tempfile.NamedTemporaryFile(suffix=".xlsx", delete=False) as temp:
            excel_file.seek(0)  # Move the file pointer to the beginning
            temp.write(excel_file.read())
            temp_path = temp.name

        output_dir = tempfile.gettempdir()
        pdf_file = os.path.join(output_dir, os.path.basename(temp_path).replace(".xlsx", ".pdf"))

        subprocess.run(["soffice", "--headless", "--convert-to", "pdf", temp_path, "--outdir", output_dir])
        os.remove(temp_path)

        # if not os.path.exists(pdf_file):
        #     return jsonify({"error": "Failed to convert Excel file to PDF"}), 500

        response = send_file(pdf_file, as_attachment=True, mimetype='application/pdf')
        os.remove(pdf_file)
        return response
