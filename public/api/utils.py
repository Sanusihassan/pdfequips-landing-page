from flask import jsonify, request
import requests

import os
from werkzeug.utils import secure_filename
import io
from PIL import Image
import public.api.img2pdfconverter as img2pdfconverter


def is_pdf(file):
    header = file.read(5)
    file.seek(0)  # Reset file pointer to the beginning
    return header == b'%PDF-'


def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    if not is_pdf(file):
        return jsonify({"error": "Invalid file format. Only PDF files are allowed"}), 400

    # Scan the PDF file for viruses
    # scan_result = scan_pdf(file)

   # Check the scan result and decide whether to save the file or return an error
    # if is_safe(scan_result) or True:
        # Save the file to the uploads folder
    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)
    # else:
    #     return jsonify({"error": "The file contains a virus"}), 400

    return jsonify({"message": "File uploaded and verified successfully"}), 200


# a function to scan the PDF file using the VirusTotal API:


# use ClamAV® to scan the PDF file

# def scan_pdf(file):
#     url = 'https://www.virustotal.com/api/v3/files'
#     headers = {
#         'x-apikey': API_KEY
#     }
#     files = {
#         'file': file
#     }
#     response = requests.post(url, headers=headers, files=files)
#     return response.json()


def is_safe(scan_result):
    # Implement logic to check the scan_result and determine if the file is safe
    pass


# def image_to_pdf(image_files):
#     output_pdf_path = "output.pdf"
#     with open(output_pdf_path, "wb") as output_pdf:
#         output_pdf.write(img2pdfconverter.convert(image_files))
#     return output_pdf_path


# not working
# def image_to_pdf(image_file):
#     image = Image.open(image_file)
#     if image.mode == "RGBA":
#         image = image.convert("RGB")

#     pdf_bytes = io.BytesIO()
#     image.save(pdf_bytes, "PDF", resolution=100.0)
#     pdf_bytes.seek(0)

#     return pdf_bytes
