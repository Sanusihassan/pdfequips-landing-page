import os
import tempfile
import subprocess
import zipfile
from flask import send_file

"""
    i want another function called pdf_to_jpg_converter_multiple which takes multiple pdf files
    and convert jpg files using the same approach but put the converted files for each pdf file in a
    seperate folder with the original pdf file name, and then return the folders in a zip for download.
"""

def pdf_to_jpg_converter(pdf_files):
    for pdf_file in pdf_files:
        with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as temp:
            pdf_file.seek(0)
            temp.write(pdf_file.read())
            temp_path = temp.name

        output_dir = tempfile.gettempdir()
        pdf_file.seek(0)
        temp_path = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False)
        temp_path.write(pdf_file.read())
        temp_path.flush()

        output_file = os.path.join(output_dir, os.path.basename(temp_path.name).replace(".pdf", ".jpg"))

        subprocess.run(["soffice", "--headless", "--convert-to", "jpg", temp_path.name, "--outdir", output_dir])

        jpg_files = [os.path.join(output_dir, f) for f in os.listdir(output_dir) if f.endswith(".jpg")]

        if len(jpg_files) == 1:
            output_file = jpg_files[0]
        else:
            with zipfile.ZipFile(os.path.join(output_dir, "output.zip"), mode="w") as archive:
                for jpg_file in jpg_files:
                    archive.write(jpg_file, os.path.basename(jpg_file))

            output_file = os.path.join(output_dir, "output.zip")

        response = send_file(output_file, as_attachment=True, mimetype='application/zip' if len(jpg_files) > 1 else 'image/jpeg')
        os.remove(output_file)
        return response








def pdf_to_jpg_converter_multiple(pdf_files, filenames):
    output_folders = []
    # "object*" is not iterable
    # "__iter__" method not definedPylancereportGeneralTypeIssues
    # (variable) pdf_file: Unknown
    for pdf_file, filename in zip(pdf_files, filenames):
        pdf_file.seek(0)
        temp_path = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False)
        temp_path.write(pdf_file.read())
        temp_path.flush()

        output_dir = tempfile.mkdtemp()
        output_folders.append(output_dir)

        # Convert the entire PDF to a single multi-page TIFF file
        tiff_path = os.path.join(output_dir, f"{filename}.tiff")
        subprocess.run(["soffice", "--headless", "--convert-to", "tiff", "--outdir", output_dir, temp_path.name])

        # Split the multi-page TIFF file into individual JPG files
        subprocess.run(["convert", tiff_path, "-quality", "100", f"{output_dir}/{filename}-%d.jpg"])

    zip_path = os.path.join(tempfile.gettempdir(), 'output.zip')
    
    with zipfile.ZipFile(zip_path, mode="w") as archive:
        for folder in output_folders:
            for root, _, files in os.walk(folder):
                for file in files:
                    if file.endswith(".jpg"):
                        archive.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), tempfile.gettempdir()))

    response = send_file(zip_path, as_attachment=True, mimetype='application/zip')
    os.remove(zip_path)
    
    return response
