from io import BytesIO
import os
import subprocess
import tempfile


def word_to_pdf(word_file):
    # Save uploaded DOCX to temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_docx_file:
        word_file.save(temp_docx_file.name)
        temp_docx_file.close()

    # Create temporary PDF file
    temp_pdf_file = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf")
    temp_pdf_file.close()

    # Convert DOCX to PDF using LibreOffice
    libreoffice_path = 'soffice.exe'

    result = subprocess.run([libreoffice_path, '--headless', '--convert-to', 'pdf',
                             temp_docx_file.name, '--outdir', tempfile.gettempdir()],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if result.returncode != 0:
        print("stdout:", result.stdout.decode('utf-8'))
        print("stderr:", result.stderr.decode('utf-8'))
        raise subprocess.CalledProcessError(result.returncode, result.args)

    # Read PDF file and return
    pdf_filename = os.path.join(tempfile.gettempdir(), os.path.splitext(
        os.path.basename(temp_docx_file.name))[0] + '.pdf')
    with open(pdf_filename, "rb") as f:
        final_pdf = BytesIO(f.read())

    # Delete temporary files
    os.unlink(temp_docx_file.name)
    os.unlink(temp_pdf_file.name)
    os.unlink(pdf_filename)

    return final_pdf
