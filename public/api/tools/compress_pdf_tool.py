import os
import tempfile
from PyPDF2 import PdfReader, PdfWriter


def compress_pdf(pdf_file):
    # Check if pdf_file exists
    if not os.path.exists(pdf_file):
        raise FileNotFoundError(f"No such file or directory: '{pdf_file}'")

    # Create a temporary compressed PDF file
    temp_compressed_pdf = tempfile.NamedTemporaryFile(
        delete=False, suffix=".pdf")
    temp_compressed_pdf.close()

    # Open the original PDF file
    pdf_reader = PdfReader(pdf_file)

    # Create a PDF writer object for the compressed PDF
    pdf_writer = PdfWriter()

    # Compress each page of the original PDF and add to the PDF writer
    for page_num in range(len(pdf_reader.pages)):

        pdf_writer.add_page(pdf_reader.pages[page_num])

    # Write the compressed PDF to the temporary file
    with open(temp_compressed_pdf.name, "wb") as fout:
        pdf_writer.write(fout)

    # Read the compressed PDF file and return
    with open(temp_compressed_pdf.name, "rb") as fin:
        compressed_pdf = fin.read()

    # Delete the temporary compressed PDF file
    os.unlink(temp_compressed_pdf.name)

    return compressed_pdf
