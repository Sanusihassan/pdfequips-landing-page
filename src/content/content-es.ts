import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const landing_page: _landing_page = {
  hero: {
    title: "Mejore su productividad con nuestra solución integral de PDF",
    description:
      "Lleve sus flujos de trabajo PDF al siguiente nivel: desbloquee nuevas posibilidades con nuestro completo kit de herramientas.",
  },
  features: {
    title: "Cómo PDFEquips puede simplificar tus tareas PDF",
    description:
      "PDFEquips te ofrece una variedad de funciones para manejar tus archivos PDF con facilidad. Ya sea que quieras fusionar, dividir, comprimir, convertir, editar o proteger tus PDF, puedes hacerlo todo con solo unos pocos clics. PDFEquips es rápido, confiable y seguro.",
  },
  why_us: {
    title: "La solución PDF en la que puedes confiar",
    description:
      "PDFEquips es tu aplicación web definitiva para gestionar PDF con facilidad. Disfruta de todas\
    las funciones que necesitas para trabajar eficazmente con tus documentos digitales\
    mientras mantienes tus datos seguros y protegidos.",
  },
};

export const tool: _tool = {
  Merge_PDF: {
    title: "Combinar PDF",
    description: "Combina varios archivos PDF en un solo documento",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Compress_PDF: {
    title: "Comprimir PDF",
    description: "Reduce el tamaño de un archivo PDF sin perder calidad",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Lock_PDF: {
    title: "Bloquear PDF",
    description:
      "Proteja su archivo PDF con una contraseña para evitar el acceso no autorizado.",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "Desbloquear PDF",
    description:
      "Eliminar fácilmente la protección por contraseña de su archivo PDF con nuestra herramienta fácil de usar.",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },
  Translate_PDF: {
    title: "Traducir PDF",
    description: "Traducir el texto de un archivo PDF a otro idioma",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF a Powerpoint",
    description:
      "Convierte archivos PDF a presentaciones de Powerpoint editables",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG a PDF",
    description: "Convierte archivos de imagen JPG a documentos PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD a PDF",
    description: "Convierte archivos de Microsoft Word a documentos PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT a PDF",
    description: "Convierte archivos de Microsoft Powerpoint a documentos PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL a PDF",
    description: "Convierte archivos de Microsoft Excel a documentos PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML a PDF",
    description: "Convierte páginas web HTML a documentos PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },

  Markdown_to_PDF: {
    title: "Markdown a PDF",
    description: "Convertir Markdown a PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_JPG: {
    title: "PDF a JPG",
    description: "Convierte archivos PDF a archivos de imagen JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF a WORD",
    description: "Convierte archivos PDF a documentos de Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF a EXCEL",
    description: "Convierte archivos PDF a documentos de Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF a PDF/A",
    description:
      "Convierte archivos PDF al formato PDF/A para archivado a largo plazo",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "Web a PDF",
    description: "Convertir páginas web en documentos PDF",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "PDF a texto",
    description: "Convertir archivos PDF en documentos de texto plano",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF a HTML",
    description: "Convierte archivos PDF a documentos HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },
  PDF_to_Markdown: {
    title: "PDF a Markdown",
    description: "Convierte archivos PDF al formato Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};

export const web2pdftool: _web2pdftool = {
  placeholder: "Ejemplo: https://pdfequips.com",
  submit_btn: "Convertir",
};

export const translate_pdf = {
  drag_and_drop: "Arrastre y suelte los archivos aquí",
  or_choose_file: "O elija un archivo",
  browse_file: "Examinar sus archivos",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Opciones para fusionar PDF",
    split_pdf: "Opciones para dividir PDF",
    compress_pdf: "Opciones para comprimir PDF",
    pdf_to_powerpoint: "Opciones para convertir PDF a PowerPoint",
    jpg_to_pdf: "Opciones para convertir JPG a PDF",
    word_to_pdf: "Opciones para convertir WORD a PDF",
    powerpoint_to_pdf: "Opciones para convertir POWERPOINT a PDF",
    excel_to_pdf: "Opciones para convertir EXCEL a PDF",
    html_to_pdf: "Opciones para convertir HTML a PDF",
    pdf_to_jpg: "Opciones para convertir PDF a JPG",
    pdf_to_word: "Opciones para convertir PDF a WORD",
    pdf_to_excel: "Opciones para convertir PDF a EXCEL",
    pdf_to_pdf_a: "Opciones para convertir PDF a PDF/A",
    pdf_to_text: "Opciones de PDF a texto",
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    merge_pdf: "Combinar PDF",
    split_pdf: "Dividir PDF",
    compress_pdf: "Comprimir PDF",
    pdf_to_powerpoint: "Convertir a Powerpoint",
    jpg_to_pdf: "Convertir a PDF",
    word_to_pdf: "Convertir a PDF",
    powerpoint_to_pdf: "Convertir a PDF",
    excel_to_pdf: "Convertir a PDF",
    html_to_pdf: "Convertir a PDF",
    pdf_to_jpg: "Convertir a JPG",
    pdf_to_word: "Convertir a Word",
    pdf_to_excel: "Convertir a Excel",
    pdf_to_pdf_a: "Convertir a PDF/A",
    pdf_to_text: "Convertir a texto",
    translate_pdf: "Traducir PDF",
  },
  pages: "paginas",
  page: "página",
  compress_pdf: [
    {
      title: "Compresión recomendada",
      description: "Mejor equilibrio entre tamaño y calidad",
    },
    {
      title: "Menos compresión",
      description: "Tamaño de archivo más pequeño pero calidad inferior",
    },
    {
      title: "Compresión extrema",
      description:
        "Tamaño de archivo significativamente más pequeño pero mucha calidad inferior",
    },
    {
      title: "Compresión personalizada",
      description: "Elige tu propio nivel de compresión",
    },
  ],
  merge_pdf:
    "Usa arrastrar y soltar para cambiar el orden de los archivos PDF para combinarlos. Haz clic y   mantén presionado un archivo, muévelo a la ubicación deseada y suelta el botón del mouse.   Los archivos PDF se fusionan de arriba hacia abajo. Para eliminar un archivo, haz clic en el icono de eliminar   encima del archivo. Para rotar una página, haz clic en el icono de rotación encima de   la miniatura de página y selecciona el ángulo de rotación deseado. Una vez que los archivos estén   en el orden y orientación deseado, haz clic en el botón 'Combinar' para unirlos   en un solo archivo PDF.",
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "¡Combinación de archivos PDF exitosa!",
      "¡Combinación de archivo PDF exitosa!",
    ],
    "split-pdf": ["¡División de archivo PDF exitosa!"],
    "compress-pdf": [
      "¡Compresión de archivos PDF exitosa!",
      "¡Compresión de archivo PDF exitosa!",
    ],
    "pdf-to-powerpoint": [
      "¡Conversión de archivos PDF a PowerPoint exitosa!",
      "¡Conversión de archivo PDF a PowerPoint exitosa!",
    ],
    "jpg-to-pdf": [
      "¡Conversión de archivos JPG a PDF exitosa!",
      "¡Conversión de archivo JPG a PDF exitosa!",
    ],
    "word-to-pdf": [
      "¡Conversión de archivos Word a PDF exitosa!",
      "¡Conversión de archivo Word a PDF exitosa!",
    ],
    "powerpoint-to-pdf": [
      "¡Conversión de archivos PowerPoint a PDF exitosa!",
      "¡Conversión de archivo PowerPoint a PDF exitosa!",
    ],
    "excel-to-pdf": [
      "¡Conversión de archivos Excel a PDF exitosa!",
      "¡Conversión de archivo Excel a PDF exitosa!",
    ],
    "html-to-pdf": [
      "¡Conversión de archivos HTML a PDF exitosa!",
      "¡Conversión de archivo HTML a PDF exitosa!",
    ],
    "pdf-to-jpg": [
      "¡Conversión de archivos PDF a JPG exitosa!",
      "¡Conversión de archivo PDF a JPG exitosa!",
    ],
    "pdf-to-word": [
      "¡Conversión de archivos PDF a Word exitosa!",
      "¡Conversión de archivo PDF a Word exitosa!",
    ],
    "pdf-to-excel": [
      "¡Conversión de archivos PDF a Excel exitosa!",
      "¡Conversión de archivo PDF a Excel exitosa!",
    ],
    "pdf-to-pdf-a": [
      "¡Conversión de archivos PDF a PDF/A exitosa!",
      "¡Conversión de archivo PDF a PDF/A exitosa!",
    ],
    "web-to-pdf": [
      "¡Conversión de sitios web a archivos PDF exitosa!",
      "¡Conversión de sitio web a archivo PDF exitosa!",
    ],
    "pdf-to-text": [
      "¡Conversión de archivos PDF a texto exitosa!",
      "¡Conversión de archivo PDF a texto exitosa!",
    ],
    "markdown-to-pdf": [
      "¡Conversión de archivos Markdown a PDF exitosa!",
      "¡Conversión de archivo Markdown a PDF exitosa!",
    ],
    "pdf-to-html": [
      "¡Conversión de archivos PDF a HTML exitosa!",
      "¡Conversión de archivo PDF a HTML exitosa!",
    ],
    "pdf-to-markdown": [
      "¡Conversión de archivos PDF a Markdown exitosa!",
      "¡Conversión de archivo PDF a Markdown exitosa!",
    ],
  },
  btnText: {
    "merge-pdf": [
      "Descargar archivos PDF combinados",
      "Descargar archivo PDF combinado",
    ],
    "split-pdf": [
      "Descargar archivos PDF divididos",
      "Descargar archivo PDF dividido",
    ],
    "compress-pdf": [
      "Descargar archivos PDF comprimidos",
      "Descargar archivo PDF comprimido",
    ],
    "pdf-to-powerpoint": [
      "Descargar archivos PowerPoint convertidos",
      "Descargar archivo PowerPoint convertido",
    ],
    "jpg-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "word-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "powerpoint-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "excel-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "html-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "pdf-to-jpg": [
      "Descargar archivos JPG convertidos",
      "Descargar archivo JPG convertido",
    ],
    "pdf-to-word": [
      "Descargar archivos Word convertidos",
      "Descargar archivo Word convertido",
    ],
    "pdf-to-excel": [
      "Descargar archivos Excel convertidos",
      "Descargar archivo Excel convertido",
    ],
    "pdf-to-pdf-a": [
      "Descargar archivos PDF/A convertidos",
      "Descargar archivo PDF/A convertido",
    ],
    "web-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "pdf-to-text": [
      "Descargar archivos de texto extraídos",
      "Descargar archivo de texto extraído",
    ],
    "markdown-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "pdf-to-html": [
      "Descargar archivos HTML convertidos",
      "Descargar archivo HTML convertido",
    ],
    "pdf-to-markdown": [
      "Descargar archivos Markdown convertidos",
      "Descargar archivo Markdown convertido",
    ],
  },
  backto: {
    "merge-pdf": "Volver a unir PDF",
    "split-pdf": "Volver a dividir PDF",
    "compress-pdf": "Volver a comprimir PDF",
    "pdf-to-powerpoint": "Volver a PDF a PowerPoint",
    "jpg-to-pdf": "Volver a JPG a PDF",
    "word-to-pdf": "Volver a Word a PDF",
    "powerpoint-to-pdf": "Volver a PowerPoint a PDF",
    "excel-to-pdf": "Volver a Excel a PDF",
    "html-to-pdf": "Volver a HTML a PDF",
    "pdf-to-jpg": "Volver a PDF a JPG",
    "pdf-to-word": "Volver a PDF a Word",
    "pdf-to-excel": "Volver a PDF a Excel",
    "pdf-to-pdf-a": "Volver a PDF a PDF-A",
    "web-to-pdf": "Volver a Web a PDF",
    "pdf-to-text": "Volver a PDF a Texto",
    "markdown-to-pdf": "Volver a Markdown a PDF",
    "pdf-to-html": "Volver a PDF a HTML",
    "pdf-to-markdown": "Volver a PDF a Markdown",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
};
