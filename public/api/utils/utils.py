from werkzeug.datastructures import FileStorage

def is_pdf(file):
    header = file.read(5)
    file.seek(0)  # Reset file pointer to the beginning
    return header == b'%PDF-'

def is_jpg(file):
    header = file.read(3)
    file.seek(0)  
    return header == b'\xFF\xD8\xFF'

def is_doc(file):
    header = file.read(4)
    file.seek(0)  
    return header == b'\xD0\xCF\x11\xE0'

def is_docx(file):
    header = file.read(4)
    file.seek(0)  
    return header == b'\x50\x4B\x03\x04'

def is_xls(file): 
    header = file.read(5) 
    file.seek(0) 
    return header == b'\xD0\xCF\x11\xE0\xA1'	
    
def is_xlsx(file): 
    header = file.read(5) 
    file.seek(0)
    return header == b'\x49\x44\x41\x54\xAA'  
    
def is_ppt(file):
    header = file.read(4) 
    file.seek(0) 
    return header == b'\xD0\xCF\x11\xE0'

def is_pptx(file):
    header = file.read(5) 
    file.seek(0) 
    return header == b'\x50\x4B\x03\x04\x14'

ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'}
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50 MB

def validate_file(files):
    max_files = 5

    if isinstance(files, FileStorage):
        files = [files]
    if len(files) > max_files:
        return "ERR_MAX_FILES_EXCEEDED"
    for file in files:
        filename = file.filename
        extension = filename.split('.')[-1]
        if not file:
            return 'FILE_CORRUPT'
        if not filename:
            return 'FILE_CORRUPT'
        if not file.content_type:
            return 'NOT_SUPPORTED_TYPE'
        if file.getbuffer().nbytes <= 0:
            return 'EMPTY_FILE'
        
        # Check file type
        if extension == 'pdf' and not is_pdf(file):
            return 'NOT_SUPPORTED_TYPE'
        elif extension == 'jpg' and not is_jpg(file):
            return 'NOT_SUPPORTED_TYPE'
        elif extension in ['doc', 'docx'] and not is_doc(file) and not is_docx(file):
            return 'NOT_SUPPORTED_TYPE'
        elif extension in ['xls', 'xlsx'] and not is_xls(file) and not is_xlsx(file):
            return 'NOT_SUPPORTED_TYPE'
        elif extension in ['ppt', 'pptx'] and not is_ppt(file) and not is_pptx(file):
            return 'NOT_SUPPORTED_TYPE'

        if file.getbuffer().bytes > MAX_FILE_SIZE:
            return 'FILE_TOO_LARGE'
    
    return None
# use ClamAV® to scan the PDF file

# def scan_pdf(file):
#     url = 'https://www.virustotal.com/api/v3/files'
#     headers = {
#         'x-apikey': API_KEY
#     }
#     files = {
#         'file': file
#     }
#     response = requests.post(url, headers=headers, files=files)
#     return response.json()

