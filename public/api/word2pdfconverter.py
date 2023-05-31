import os
import tempfile
import subprocess
from flask import send_file, jsonify
import zipfile

def word_to_pdf(word_files):
    for word_file in word_files:
        with tempfile.NamedTemporaryFile(suffix=".docx", delete=False) as temp:
            word_file.seek(0)  # Move the file pointer to the beginning
            temp.write(word_file.read())
            temp_path = temp.name

        output_dir = tempfile.gettempdir()
        pdf_file = os.path.join(output_dir, os.path.basename(temp_path).replace(".docx", ".pdf"))

        subprocess.run(["soffice", "--headless", "--convert-to", "pdf", temp_path, "--outdir", output_dir])
        os.remove(temp_path)

        if not os.path.exists(pdf_file):
            return jsonify({"error": "Failed to convert Word file to PDF"}), 500

        response = send_file(pdf_file, as_attachment=True, mimetype='application/pdf')
        os.remove(pdf_file)
        return response




def word_to_pdf_multiple(word_files):
    # Create a temporary directory for the zip file
    with tempfile.TemporaryDirectory() as tempdir:
        zip_path = os.path.join(tempdir, "converted_files.zip")
        with zipfile.ZipFile(zip_path, "w") as zipf:
            for word_file in word_files:
                with tempfile.NamedTemporaryFile(suffix=".docx", delete=False) as temp:
                    word_file.seek(0)  # Move the file pointer to the beginning
                    temp.write(word_file.read())
                    temp_path = temp.name

                output_dir = tempfile.gettempdir()
                pdf_file = os.path.join(output_dir, os.path.basename(temp_path).replace(".docx", ".pdf"))

                subprocess.run(["soffice", "--headless", "--convert-to", "pdf", temp_path, "--outdir", output_dir])
                os.remove(temp_path)

                # Write the PDF file to the zip file
                zipf.write(pdf_file, os.path.relpath(pdf_file, output_dir))
                os.remove(pdf_file)  # Remove the temporary PDF file

        # Return the zip file
        return send_file(zip_path, as_attachment=True, mimetype='application/zip', download_name="converted_files.zip")
