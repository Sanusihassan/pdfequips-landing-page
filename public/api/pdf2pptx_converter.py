import os
import tempfile
import subprocess
from io import BytesIO


def pdf_to_ppt(pdf_file):
    # Save uploaded PDF to temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf_file:
        pdf_file.save(temp_pdf_file.name)
        temp_pdf_file.close()

    # Create temporary PPTX file
    temp_ppt_file = tempfile.NamedTemporaryFile(delete=False, suffix=".pptx")
    temp_ppt_file.close()

    # Convert PDF to PPTX using LibreOffice
    libreoffice_path = 'soffice'

    result = subprocess.run([libreoffice_path, '--headless', '--convert-to', 'pptx',
                             temp_pdf_file.name, '--outdir', tempfile.gettempdir()],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if result.returncode != 0:
        print("stdout:", result.stdout.decode('utf-8'))
        print("stderr:", result.stderr.decode('utf-8'))
        raise subprocess.CalledProcessError(result.returncode, result.args)

    # Read PPTX file and return
    pptx_filename = os.path.join(tempfile.gettempdir(), os.path.splitext(
        os.path.basename(temp_pdf_file.name))[0] + '.pptx')
    with open(pptx_filename, "rb") as f:
        final_pptx = BytesIO(f.read())

    # Delete temporary files
    os.unlink(temp_ppt_file.name)
    os.unlink(temp_pdf_file.name)
    os.unlink(pptx_filename)

    return final_pptx
