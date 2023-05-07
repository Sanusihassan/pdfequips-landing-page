from flask import jsonify
from pdf2image import convert_from_path
import os
import zipfile
import PyPDF2

# check if the input file is a valid PDF


import pikepdf


def is_valid_pdf(pdf_file):
    try:
        with pikepdf.open(pdf_file) as pdf:
            pass
        return True
    except pikepdf.PdfError:
        return False


# def pdf_to_jpg_converter(pdf_files, output_folder, dpi=300):
#     if not os.path.exists(output_folder):
#         os.makedirs(output_folder)

#     for pdf_file in pdf_files:
#         if is_valid_pdf(pdf_file):
#             pages = convert_from_path(pdf_file, dpi)

#             for count, page in enumerate(pages):
#                 output_filename = os.path.join(
#                     output_folder, f'{os.path.basename(pdf_file)}_page{count}.jpg')
#                 page.save(output_filename, 'JPEG')
#         else:
#             return jsonify({"error": "Invalid PDF file"}), 400

#     zip_filename = os.path.join(output_folder, 'output.zip')
#     with zipfile.ZipFile(zip_filename, 'w') as zipf:
#         for root, _, files in os.walk(output_folder):
#             for file in files:
#                 if file.endswith('.jpg'):
#                     zipf.write(os.path.join(root, file), os.path.relpath(
#                         os.path.join(root, file), output_folder))

#     return zip_filename


def pdf_to_jpg_converter(pdf_files, output_folder, dpi=300):
    for idx, pdf_file in enumerate(pdf_files):
        if not is_valid_pdf(pdf_file):
            return jsonify({"error": "Invalid PDF file"}), 400
        pages = convert_from_path(pdf_file, dpi)

        # Extract the base file name without the extension
        base_file_name = os.path.splitext(os.path.basename(pdf_file))[0]

        # Use the base file name as the folder name
        pdf_output_folder = os.path.join(output_folder, base_file_name)

        os.makedirs(pdf_output_folder, exist_ok=True)
        for count, page in enumerate(pages):
            page.save(os.path.join(pdf_output_folder,
                      f'out{count}.jpg'), 'JPEG')
