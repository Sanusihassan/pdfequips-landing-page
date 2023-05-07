import tempfile
import requests
from bs4 import BeautifulSoup
import pdfkit

""""
i want a similar function to this but to convert from pdf to pdf/a
"""


def html_to_pdf(html_file):
    # Read the HTML content
    html_content = html_file.read()

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Fetch resources and remove tags with not found resources
    resource_tags = ['img', 'link', 'script']
    for tag in resource_tags:
        for element in soup.find_all(tag):
            src_attr = 'src' if tag != 'link' else 'href'
            resource_url = element.get(src_attr)

            if resource_url:
                try:
                    response = requests.head(resource_url, timeout=5)
                    if response.status_code != 200:
                        element.decompose()
                except requests.RequestException:
                    element.decompose()

    # Save the modified HTML content to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".html") as temp_html_file:
        temp_html_file.write(soup.prettify().encode('utf-8'))
        temp_html_file.close()

    # Create a temporary PDF file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf_file:
        temp_pdf_file.close()

        # Convert the modified HTML file to PDF
        pdfkit.from_file(temp_html_file.name, temp_pdf_file.name,
                         options={"enable-local-file-access": ""})

        # Read the PDF content and return it
        with open(temp_pdf_file.name, 'rb') as f:
            pdf_content = f.read()

    return pdf_content
