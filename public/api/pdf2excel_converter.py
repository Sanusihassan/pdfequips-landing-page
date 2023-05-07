import tabula
import pandas as pd
import tempfile
import os


def pdf_to_excel(pdf_file):
    # Read the PDF file
    dataframes = tabula.read_pdf(pdf_file, pages="all", multiple_tables=True)

    # Combine all the DataFrames
    combined_data = pd.concat(dataframes, ignore_index=True)

    # Create a temporary directory and file
    with tempfile.TemporaryDirectory() as tempdir:
        temp_excel_file = os.path.join(tempdir, "temp.xlsx")

        # Save the combined data as an Excel file
        combined_data.to_excel(temp_excel_file, index=False)

        # Load the Excel file as bytes
        with open(temp_excel_file, "rb") as file:
            excel_data = file.read()

    # Return the Excel data as bytes
    return excel_data
