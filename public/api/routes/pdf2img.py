import os
import zipfile
from flask import Response, request
from pdf_to_jpg_converter import pdf_to_jpg_converter
from werkzeug.utils import secure_filename
import shutil


# stable version of pdf_to_jpg_converter
def pdf_to_jpg_route(app):
    # Define the route and function to handle the POST request
    @app.route('/pdf-to-jpg', methods=['POST'])
    def pdf_to_jpg_endpoint():
        if request.method == 'POST':
            # Create the temp directory if it doesn't exist
            if not os.path.exists('temp'):
                os.makedirs('temp')

            pdf_files = request.files.getlist('files')
            pdf_file_paths = []

            for pdf_file in pdf_files:
                secure_pdf_filename = secure_filename(pdf_file.filename)
                pdf_file_path = os.path.join('temp', secure_pdf_filename)
                pdf_file.save(pdf_file_path)
                pdf_file_paths.append(pdf_file_path)

            output_folder = app.config['UPLOAD_FOLDER']
            pdf_to_jpg_converter(pdf_file_paths, output_folder)

            # Zip the resulting JPG files and send the zip file back to the client
            zip_filename = 'converted_images.zip'
            zip_full_path = os.path.join(os.getcwd(), zip_filename)
            with zipfile.ZipFile(zip_full_path, 'w') as zipf:
                for root, _, files in os.walk(output_folder):
                    for file in files:
                        zipf.write(os.path.join(root, file), os.path.relpath(
                            os.path.join(root, file), output_folder))

            with open(zip_full_path, 'rb') as f:
                response = Response(f.read(), content_type='application/zip')
                response.headers.set('Content-Disposition',
                                     'attachment', filename=zip_filename)

            # Delete the temp directory and the generated zip folder after the download is complete
            shutil.rmtree('temp')
            os.remove(zip_full_path)

            # Remove everything in the uploads directory
            shutil.rmtree(output_folder)
            os.makedirs(output_folder)

            return response
