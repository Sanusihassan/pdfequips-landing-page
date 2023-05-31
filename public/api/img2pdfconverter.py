import imghdr
import io
from PIL import Image
from PyPDF2 import PdfFileMerger, PdfMerger
from flask import jsonify, send_file


def is_valid_jpeg(image_file):
    try:
        Image.open(image_file)
    except IOError:
        return False
    return True


"""
    i want a function similar to the below function to convert excel to pdf using soffice
    declaration of the function should be somthing like this: def excel_to_pdf(excel_file):
"""

def image_to_pdf(images):
    merger = PdfMerger()

    for image in images:
        if not is_valid_jpeg(image):
            return jsonify({"error": "Invalid image format"}), 400

        image = Image.open(image)
        pdf_bytes = io.BytesIO()
        image.save(pdf_bytes, 'PDF')
        merger.append(pdf_bytes)

    final_pdf = io.BytesIO()
    merger.write(final_pdf)
    final_pdf.seek(0)

    return send_file(final_pdf, download_name='output.pdf',
                     as_attachment=True, mimetype='application/pdf')
