export const nav_content = {
  brand: "Equips",
  merge_pdf: "fusionner des pdf",
  split_pdf: "diviser des pdf",
  compress_pdf: "compresser des pdf",
  convert_pdf: "convertir des pdf",
  convert_to_pdf: "convertir en pdf",
  jpg_to_pdf: "jpg en pdf",
  word_to_pdf: "word en pdf",
  powerpoint_to_pdf: "powerpoint en pdf",
  excel_to_pdf: "excel en pdf",
  html_to_pdf: "html en pdf",
  convert_from_pdf: "convertir à partir de pdf",
  pdf_to_jpg: "pdf en jpg",
  pdf_to_word: "pdf en word",
  pdf_to_powerpoint: "pdf en powerpoint",
  pdf_to_excel: "pdf en excel",
  pdf_to_pdf_a: "pdf en pdf/A",
};

export const landing_page = {
  hero: {
    title: "La solution PDF complète",
    description:
      "Passez à la vitesse supérieure avec vos flux de travail PDF - PDFEquips fournit tous les outils dont vous avez besoin, regroupés en un seul endroit.",
  },
};

export const tool = {
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
};
export const tools = {
  select: "Sélectionner",
  or_drop: "ou glisser-déposer des PDF ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};
export const edit_page = {
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
  },
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
export const footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};
export const errors = {
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
      "Le fichier contient des données d'image invalides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer ultérieurement ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
};