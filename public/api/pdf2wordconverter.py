import io
import os
import tempfile

from flask import send_file
from pdf2docx import Converter

"""
    i want a similar function but to convert from powerpoint to pdf
"""


def pdf_to_word(pdf_file):
    # Save the uploaded file to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf_file:
        pdf_file.save(temp_pdf_file.name)
        temp_pdf_file.close()  # Close the temporary file

    # Create a temporary Word file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_word_file:
        temp_word_file.close()

    # Convert PDF to Word using pdf2docx library
    cv = Converter(temp_pdf_file.name)
    cv.convert(temp_word_file.name)
    cv.close()

    # Read the temporary Word file into a BytesIO object
    final_word = io.BytesIO()
    with open(temp_word_file.name, 'rb') as f:
        final_word.write(f.read())
    final_word.seek(0)

    # Clean up the temporary files
    os.unlink(temp_pdf_file.name)
    os.unlink(temp_word_file.name)

    # Return the Word file as a Flask response
    return send_file(final_word, download_name='output.docx',
                     as_attachment=True, mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
