import os
import tempfile
from pyhtml2pdf import converter

def html_to_pdf(html_file):
    # Save the HTML file to a temporary directory
    with tempfile.NamedTemporaryFile(delete=False, suffix='.html') as temp_file:
        temp_file.write(html_file.read())

    # Get the path of the saved HTML file
    html_file_path = os.path.abspath(temp_file.name)

    # Convert the HTML file to a PDF file
    pdf_file_path = os.path.abspath('temp.pdf')
    converter.convert(f'file:///{html_file_path}', pdf_file_path)

    # Read the PDF file content and return it as a byte string
    with open(pdf_file_path, 'rb') as pdf_file:
        pdf_content = pdf_file.read()

    # Delete the temporary files
    os.unlink(html_file_path)
    os.unlink(pdf_file_path)

    return pdf_content
