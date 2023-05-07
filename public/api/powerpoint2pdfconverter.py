import os
import tempfile
import subprocess
from io import BytesIO
from flask import send_file

"""
    this function is converting from pptx to pdf
    i want another one to merge multiple pdf files
    using soffice or any possible solution
    please provide a working implementation of the function
"""


def ppt_to_pdf(ppt_file):
    # Save uploaded PPTX to temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pptx") as temp_ppt_file:
        ppt_file.save(temp_ppt_file.name)
        temp_ppt_file.close()

    # Create temporary PDF file
    temp_pdf_file = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf")
    temp_pdf_file.close()

    # Convert PPTX to PDF using LibreOffice
    libreoffice_path = 'soffice.exe'

    result = subprocess.run([libreoffice_path, '--headless', '--convert-to', 'pdf',
                             temp_ppt_file.name, '--outdir', tempfile.gettempdir()],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if result.returncode != 0:
        print("stdout:", result.stdout.decode('utf-8'))
        print("stderr:", result.stderr.decode('utf-8'))
        raise subprocess.CalledProcessError(result.returncode, result.args)

    # Read PDF file and return
    pdf_filename = os.path.join(tempfile.gettempdir(), os.path.splitext(
        os.path.basename(temp_ppt_file.name))[0] + '.pdf')
    with open(pdf_filename, "rb") as f:
        final_pdf = BytesIO(f.read())

    # Delete temporary files
    os.unlink(temp_ppt_file.name)
    os.unlink(temp_pdf_file.name)
    os.unlink(pdf_filename)

    return final_pdf
