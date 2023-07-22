import type {
  nav_content as nav_content_type,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
} from "../../content";

export const nav_content: nav_content_type = {
  brand: "Equips",
  merge_pdf: "fusionner des pdf",
  split_pdf: "diviser des pdf",
  compress_pdf: "compresser des pdf",
  convert_pdf: "convertir des pdf",
  convert_to_pdf: "convertir en pdf",
  jpg_to_pdf: "jpg en pdf",
  word_to_pdf: "word en pdf",
  web_to_pdf: "Web vers PDF",
  markdown_to_pdf: "Markdown en PDF",
  powerpoint_to_pdf: "powerpoint en pdf",
  excel_to_pdf: "excel en pdf",
  html_to_pdf: "html en pdf",
  convert_from_pdf: "convertir à partir de pdf",
  pdf_to_jpg: "pdf en jpg",
  pdf_to_word: "pdf en word",
  pdf_to_powerpoint: "pdf en powerpoint",
  pdf_to_excel: "pdf en excel",
  pdf_to_pdf_a: "pdf en pdf/A",
  pdf_to_text: "PDF en texte",
  pdf_to_html: "PDF vers HTML",
  pdf_to_markdown: "PDF à Markdown",
};

export const landing_page = {
  hero: {
    title: "La solution PDF complète",
    description:
      "Passez à la vitesse supérieure avec vos flux de travail PDF - PDFEquips fournit tous les outils dont vous avez besoin, regroupés en un seul endroit.",
  },
};

export const tool: _tool = {
  Merge_PDF: {
    title: "Fusionner PDF",
    description: "Combine multiple PDF files into one document",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Split_PDF: {
    title: "Diviser PDF",
    description: "Divide one PDF file into multiple documents",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Compress_PDF: {
    title: "Compresser PDF",
    description: "Reduce the file size of a PDF while maintaining quality",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF en Powerpoint",
    description: "Convert PDF files to editable Powerpoint presentations",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG en PDF",
    description: "Convert JPG image files to PDF documents",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD en PDF",
    description: "Convert Microsoft Word files to PDF documents",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT en PDF",
    description: "Convert Microsoft Powerpoint files to PDF documents",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL en PDF",
    description: "Convert Microsoft Excel files to PDF documents",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML en PDF",
    description: "Convert HTML web pages to PDF documents",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },
  Markdown_to_PDF: {
    title: "Markdown vers PDF",
    description: "Convertir Markdown en PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_JPG: {
    title: "PDF en JPG",
    description: "Convert PDF files to JPG image files",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF en WORD",
    description: "Convert PDF files to Microsoft Word documents",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF en EXCEL",
    description: "Convert PDF files to Microsoft Excel documents",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF en PDF/A",
    description: "Convert PDF files to PDF/A format for long-term archiving",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },
  Web_to_PDF: {
    title: "Web vers PDF",
    description: "Convertir des pages Web en documents PDF",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "PDF vers texte",
    description: "Convertir des fichiers PDF en documents texte",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF vers HTML",
    description: "Convertir des fichiers PDF en documents HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF vers Markdown",
    description: "Convertir des fichiers PDF au format Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};

export const web2pdftool: _web2pdftool = {
  placeholder: "Exemple: https://pdfequips.com",
  submit_btn: "Convertir",
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};
export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Options de fusion de PDF",
    split_pdf: "Options de séparation de PDF",
    compress_pdf: "Options de compression de PDF",
    pdf_to_powerpoint: "Options de conversion de PDF en PowerPoint",
    jpg_to_pdf: "Options de conversion de JPG en PDF",
    word_to_pdf: "Options de conversion de WORD en PDF",
    powerpoint_to_pdf: "Options de conversion de POWERPOINT en PDF",
    excel_to_pdf: "Options de conversion de EXCEL en PDF",
    html_to_pdf: "Options de conversion de HTML en PDF",
    pdf_to_jpg: "Options de conversion de PDF en JPG",
    pdf_to_word: "Options de conversion de PDF en WORD",
    pdf_to_excel: "Options de conversion de PDF en EXCEL",
    pdf_to_pdf_a: "Options de conversion de PDF en PDF/A",
    pdf_to_text: "Options de PDF à texte",
  },
  loader_text: "Veuillez patienter...",
  action_buttons: {
    merge_pdf: "Fusionner PDF",
    split_pdf: "Diviser PDF",
    compress_pdf: "Compresser PDF",
    pdf_to_powerpoint: "Convertir en PowerPoint",
    jpg_to_pdf: "Convertir en PDF",
    word_to_pdf: "Convertir en PDF",
    powerpoint_to_pdf: "Convertir en PDF",
    excel_to_pdf: "Convertir en PDF",
    html_to_pdf: "Convertir en PDF",
    pdf_to_jpg: "Convertir en JPG",
    pdf_to_word: "Convertir en Word",
    pdf_to_excel: "Convertir en Excel",
    pdf_to_pdf_a: "Convertir en PDF/A",
    pdf_to_text: "Convertir en texte",
  },
  pages: "pages",
  page: "page",
  compress_pdf: [
    {
      title: "Compression recommandée",
      description: "Meilleur équilibre entre la taille et la qualité",
    },
    {
      title: "Compression moins importante",
      description: "Taille de fichier plus petite mais qualité inférieure",
    },
    {
      title: "Compression extrême",
      description:
        "Taille de fichier considérablement plus petite mais qualité bien inférieure",
    },
    {
      title: "Compression personnalisée",
      description: "Choisissez votre propre niveau de compression",
    },
  ],
  merge_pdf: `Utilisez le glisser-déposer pour changer l'ordre des fichiers PDF pour la fusion. Cliquez et maintenez un fichier, déplacez-le à l'emplacement souhaité et relâchez le bouton de la souris.
  Les fichiers PDF sont fusionnés de haut en bas. Pour supprimer un fichier, cliquez sur l'icône de suppression en haut du fichier. Pour faire pivoter une page, cliquez sur l'icône de rotation en haut de la vignette de la page et sélectionnez l'angle de rotation souhaité. Une fois que les fichiers sont dans l'ordre et l'orientation souhaités, cliquez sur le bouton "Fusionner" pour les combiner en un seul fichier PDF.`,
};
export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
