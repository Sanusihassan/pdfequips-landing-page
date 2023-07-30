import type {
  nav_content as nav_content_type,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
} from "../../content";

export const nav_content: nav_content_type = {
  brand: "Equips",
  merge_pdf: "دمج PDF",
  split_pdf: "تقسيم PDF",
  compress_pdf: "ضغط PDF",
  convert_pdf: "تحويل PDF",
  convert_to_pdf: "تحويل إلى PDF",
  jpg_to_pdf: "JPG إلى PDF",
  word_to_pdf: "Word إلى PDF",
  powerpoint_to_pdf: "PowerPoint إلى PDF",
  excel_to_pdf: "Excel إلى PDF",
  html_to_pdf: "HTML إلى PDF",
  markdown_to_pdf: "Markdown إلى PDF",
  convert_from_pdf: "تحويل من PDF",
  web_to_pdf: "من الويب إلى PDF",
  pdf_to_jpg: "PDF إلى JPG",
  pdf_to_word: "PDF إلى Word",
  pdf_to_powerpoint: "PDF إلى PowerPoint",
  pdf_to_excel: "PDF إلى Excel",
  pdf_to_pdf_a: "PDF إلى PDF/A",
  pdf_to_text: "PDF إلى نص",
  pdf_to_html: "PDF إلى HTML",
  pdf_to_markdown: "PDF إلى Markdown",
};

export const landing_page = {
  hero: {
    title: "الحل الشامل لملفات ال PDF",
    description: `خذ عمليات ال PDF الخاصة بك إلى المستوى التالي - يوفر PDFEquips
          كل الأدوات التي تحتاجها في مكان واحد.`,
  },
};

export const tool: _tool = {
  Merge_PDF: {
    title: "دمج PDF",
    description: "دمج ملفات PDF متعددة في مستند واحد",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Split_PDF: {
    title: "تقسيم PDF",
    description: "تقسيم ملف PDF إلى عدة مستندات",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Compress_PDF: {
    title: "ضغط PDF",
    description: "تقليل حجم ملف PDF مع الحفاظ على الجودة",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF إلى PowerPoint",
    description: "تحويل ملفات PDF إلى عروض Powerpoint قابلة للتحرير",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG إلى PDF",
    description: "تحويل ملفات صور JPG إلى مستندات PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD إلى PDF",
    description: "تحويل ملفات Microsoft Word إلى مستندات PDF",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT إلى PDF",
    description: "تحويل ملفات Microsoft Powerpoint إلى مستندات PDF",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL إلى PDF",
    description: "تحويل ملفات Microsoft Excel إلى مستندات PDF",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },

  Markdown_to_PDF: {
    title: "تحويل النص بتنسيق ماركداون إلى ملف PDF",
    description: "تحويل النص بتنسيق ماركداون إلى ملف PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  HTML_to_PDF: {
    title: "HTML إلى PDF",
    description: "تحويل صفحات الويب HTML إلى مستندات PDF",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF إلى JPG",
    description: "تحويل ملفات PDF إلى ملفات صور JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF إلى WORD",
    description: "تحويل ملفات PDF إلى مستندات Microsoft Word",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF إلى EXCEL",
    description: "تحويل ملفات PDF إلى مستندات Microsoft Excel",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF إلى PDF/A",
    description: "تحويل ملفات PDF إلى تنسيق PDF/A للأرشفة على المدى الطويل",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },
  Web_to_PDF: {
    title: "تحويل الويب إلى PDF",
    description: "تحويل صفحات الويب إلى مستندات PDF",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },
  PDF_to_Text: {
    title: "تحويل PDF إلى نص",
    description: "تحويل ملفات PDF إلى مستندات نصية عادية",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF إلى HTML",
    description: "تحويل ملفات PDF إلى مستندات HTML",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF إلى Markdown",
    description: "تحويل ملفات PDF إلى تنسيق Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};

export const web2pdftool: _web2pdftool = {
  placeholder: "مثال: https://pdfequips.com",
  submit_btn: "تحويل",
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": ["تم دمج ملفات ال PDF!", "تم دمج ملف ال PDF!"],
    "split-pdf": ["تم تقسيم ملف ال PDF!"],
    "compress-pdf": ["تم ضغط ملفات ال PDF!", "تم ضغط ملف ال PDF!"],
    "pdf-to-powerpoint": [
      "تم تحويل ملفات PDF إلى PowerPoint!",
      "تم تحويل ملف PDF إلى PowerPoint!",
    ],
    "jpg-to-pdf": ["تم تحويل ملفات JPG إلى PDF!", "تم تحويل ملف JPG إلى PDF!"],
    "word-to-pdf": [
      "تم تحويل ملفات Word إلى PDF!",
      "تم تحويل ملف Word إلى PDF!",
    ],
    "powerpoint-to-pdf": [
      "تم تحويل ملفات PowerPoint إلى PDF!",
      "تم تحويل ملف PowerPoint إلى PDF!",
    ],
    "excel-to-pdf": [
      "تم تحويل ملفات Excel إلى PDF!",
      "تم تحويل ملف Excel إلى PDF!",
    ],
    "html-to-pdf": [
      "تم تحويل ملفات HTML إلى PDF!",
      "تم تحويل ملف HTML إلى PDF!",
    ],
    "pdf-to-jpg": ["تم تحويل ملفات PDF إلى JPG!", "تم تحويل ملف PDF إلى JPG!"],
    "pdf-to-word": [
      "تم تحويل ملفات PDF إلى Word!",
      "تم تحويل ملف PDF إلى Word!",
    ],
    "pdf-to-excel": [
      "تم تحويل ملفات PDF إلى Excel!",
      "تم تحويل ملف PDF إلى Excel!",
    ],
    "pdf-to-pdf-a": [
      "تم تحويل ملفات PDF إلى PDF/A!",
      "تم تحويل ملف PDF إلى PDF/A!",
    ],
    "web-to-pdf": [
      "تم تحويل المواقع إلى ملفات PDF!",
      "تم تحويل الموقع إلى ملف PDF!",
    ],
    "pdf-to-text": ["تم تحويل ملفات PDF إلى نص!", "تم تحويل ملف PDF إلى نص!"],
    "markdown-to-pdf": [
      "تم تحويل ملفات Markdown إلى PDF!",
      "تم تحويل ملف Markdown إلى PDF!",
    ],
    "pdf-to-html": [
      "تم تحويل ملفات PDF إلى HTML!",
      "تم تحويل ملف PDF إلى HTML!",
    ],
    "pdf-to-markdown": [
      "تم تحويل ملفات PDF إلى Markdown!",
      "تم تحويل ملف PDF إلى Markdown!",
    ],
  },
  btnText: {
    "merge-pdf": ["تحميل ملفات PDF المدموجة", "تحميل ملف PDF مدموج"],
    "split-pdf": ["تحميل ملفات PDF المقسمة", "تحميل ملف PDF مقسم"],
    "compress-pdf": ["تحميل ملفات PDF المضغوطة", "تحميل ملف PDF مضغوط"],
    "pdf-to-powerpoint": [
      "تحميل ملفات PowerPoint المحولة",
      "تحميل ملف PowerPoint المحول",
    ],
    "jpg-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "word-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "powerpoint-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "excel-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "html-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "pdf-to-jpg": ["تحميل ملفات JPG المحولة", "تحميل ملف JPG المحول"],
    "pdf-to-word": ["تحميل ملفات Word المحولة", "تحميل ملف Word المحول"],
    "pdf-to-excel": ["تحميل ملفات Excel المحولة", "تحميل ملف Excel المحول"],
    "pdf-to-pdf-a": ["تحميل ملفات PDF/A المحولة", "تحميل ملف PDF/A المحول"],
    "web-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "pdf-to-text": ["تحميل ملفات النص المحولة", "تحميل ملف النص المحول"],
    "markdown-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
    "pdf-to-html": ["تحميل ملفات HTML المحولة", "تحميل ملف HTML المحول"],
    "pdf-to-markdown": [
      "تحميل ملفات Markdown المحولة",
      "تحميل ملف Markdown المحول",
    ],
  },
  backto: {
    "merge-pdf": "العودة إلى دمج ملفات PDF",
    "split-pdf": "العودة إلى تقسيم ملفات PDF",
    "compress-pdf": "العودة إلى ضغط ملفات PDF",
    "pdf-to-powerpoint": "العودة إلى PDF إلى باوربوينت",
    "jpg-to-pdf": "العودة إلى JPG إلى PDF",
    "word-to-pdf": "العودة إلى Word إلى PDF",
    "powerpoint-to-pdf": "العودة إلى باوربوينت إلى PDF",
    "excel-to-pdf": "العودة إلى Excel إلى PDF",
    "html-to-pdf": "العودة إلى HTML إلى PDF",
    "pdf-to-jpg": "العودة إلى PDF إلى JPG",
    "pdf-to-word": "العودة إلى PDF إلى Word",
    "pdf-to-excel": "العودة إلى PDF إلى Excel",
    "pdf-to-pdf-a": "العودة إلى PDF إلى PDF-A",
    "web-to-pdf": "العودة إلى Web إلى PDF",
    "pdf-to-text": "العودة إلى PDF إلى النص",
    "markdown-to-pdf": "العودة إلى Markdown إلى PDF",
    "pdf-to-html": "العودة إلى PDF إلى HTML",
    "pdf-to-markdown": "العودة إلى PDF إلى Markdown",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "خيارات دمج ملف PDF",
    split_pdf: "خيارات تقسيم ملف PDF",
    compress_pdf: "خيارات ضغط ملف PDF",
    pdf_to_powerpoint: "خيارات تحويل ملف PDF إلى باوربوينت",
    jpg_to_pdf: "خيارات تحويل ملف JPG إلى PDF",
    word_to_pdf: "خيارات تحويل ملف WORD إلى PDF",
    powerpoint_to_pdf: "خيارات تحويل ملف POWERPOINT إلى PDF",
    excel_to_pdf: "خيارات تحويل ملف EXCEL إلى PDF",
    html_to_pdf: "خيارات تحويل ملف HTML إلى PDF",
    pdf_to_jpg: "خيارات تحويل ملف PDF إلى JPG",
    pdf_to_word: "خيارات تحويل ملف PDF إلى WORD",
    pdf_to_excel: "خيارات تحويل ملف PDF إلى EXCEL",
    pdf_to_pdf_a: "خيارات تحويل ملف PDF إلى PDF/A",
    pdf_to_text: "خيارات تحويل PDF إلى نص",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    merge_pdf: "دمج PDF",
    split_pdf: "تقسيم PDF",
    compress_pdf: "ضغط PDF",
    pdf_to_powerpoint: "تحويل إلى Powerpoint",
    jpg_to_pdf: "تحويل إلى PDF",
    word_to_pdf: "تحويل إلى PDF",
    powerpoint_to_pdf: "تحويل إلى PDF",
    excel_to_pdf: "تحويل إلى PDF",
    html_to_pdf: "تحويل إلى PDF",
    pdf_to_jpg: "تحويل إلى JPG",
    pdf_to_word: "تحويل إلى Word",
    pdf_to_excel: "تحويل إلى Excel",
    pdf_to_pdf_a: "تحويل إلى PDF/A",
    pdf_to_text: "تحويل إلى نص",
  },
  pages: "صفحة",
  page: "صفحة واحدة",
  compress_pdf: [
    {
      title: "ضغط مُستَحسَن",
      description: "أفضل توازن بين الحجم والجودة",
    },
    {
      title: "ضغط أقل",
      description: "حجم ملف أصغر ولكن جودة أقل",
    },
    {
      title: "ضغط شديد",
      description: "حجم ملف أصغر بشكل كبير ولكن جودة أقل بكثير",
    },
    {
      title: "ضغط مخصص",
      description: "اختيار كمية الضغط الخاصة بك",
    },
  ],
  merge_pdf: `استخدم السحب والإفلات لتغيير ترتيب ملفات PDF للدمج. انقر واستمر في الضغط على الملف، وانقله إلى الموقع المطلوب، وانترك زر الفأرة.
  تتم عملية دمج ملفات PDF من الأعلى إلى الأسفل. لإزالة ملف، انقر على أيقونة الحذف في الجزء العلوي من الملف. لتدوير صفحة، انقر على أيقونة الدوران في الجزء العلوي من صورة المصغّرة وحدد زاوية الدوران المطلوبة. بمجرد ترتيب الملفات بالترتيب والاتجاه المطلوبين، انقر على زر "دمج" لدمجها في ملف PDF واحد.
  `,
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
