import type { nav_content as nav_content_type } from "../../content";

export const nav_content:nav_content_type = {
  brand: "Equips",
  merge_pdf: "combinar pdf",
  split_pdf: "dividir pdf",
  compress_pdf: "comprimir pdf",
  convert_pdf: "convertir pdf",
  convert_to_pdf: "convertir a pdf",
  jpg_to_pdf: "jpg a pdf",
  word_to_pdf: "word a pdf",
  powerpoint_to_pdf: "powerpoint a pdf",
  web_to_pdf: "Web a PDF",
  markdown_to_pdf: "Markdown a PDF",
  excel_to_pdf: "excel a pdf",
  html_to_pdf: "html a pdf",
  convert_from_pdf: "convertir desde pdf",
  pdf_to_jpg: "pdf a jpg",
  pdf_to_word: "pdf a word",
  pdf_to_powerpoint: "pdf a powerpoint",
  pdf_to_excel: "pdf a excel",
  pdf_to_pdf_a: "pdf a pdf/A",
  pdf_to_text: "PDF a texto"
};

export const landing_page = {
  hero: {
    title: "La solución completa para PDF",
    description:
      "Lleva tus flujos de trabajo de PDF al siguiente nivel - PDFEquips proporciona todas las herramientas que necesitas, en un solo lugar.",
  },
};

export const tool = {
  Merge_PDF: {
    title: "Combinar PDF",
    description: "Combina varios archivos PDF en un solo documento",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Split_PDF: {
    title: "Dividir PDF",
    description: "Divide un archivo PDF en varios documentos",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Compress_PDF: {
    title: "Comprimir PDF",
    description: "Reduce el tamaño de un archivo PDF sin perder calidad",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
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
};

export const web2pdftool = {
  placeholder: "Ejemplo: https://pdfequips.com",
  submit_btn: "Convertir"
};

export const edit_page = {
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
  },
  loader_text: "Por favor espera...",
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

export const tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors = {
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
    message: "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  }
};
