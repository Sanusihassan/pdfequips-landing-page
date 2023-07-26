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
  // इसे अनदेखा करें
  brand: "Equips",
  merge_pdf: "पीडीएफ विलय करें",
  split_pdf: "पीडीएफ विभाजित करें",
  compress_pdf: "पीडीएफ संपीड़ित करें",
  convert_pdf: "पीडीएफ परिवर्तित करें",
  convert_to_pdf: "पीडीएफ में परिवर्तित करें",
  jpg_to_pdf: "जेपीजी से पीडीएफ",
  word_to_pdf: "शब्द से पीडीएफ",
  markdown_to_pdf: "पीडीएफ में मार्कडाउन करें",
  powerpoint_to_pdf: "पावरपॉइंट से पीडीएफ",
  excel_to_pdf: "एक्सेल से पीडीएफ",
  html_to_pdf: "एचटीएमएल से पीडीएफ",
  web_to_pdf: "वेब से पीडीएफ",
  convert_from_pdf: "पीडीएफ से परिवर्तित करें",
  pdf_to_jpg: "पीडीएफ से जेपीजी",
  pdf_to_word: "पीडीएफ से शब्द",
  pdf_to_powerpoint: "पीडीएफ से पावरपॉइंट",
  pdf_to_excel: "पीडीएफ से एक्सेल",
  pdf_to_pdf_a: "पीडीएफ से पीडीएफ/ए",
  pdf_to_text: "पाठ के लिए पीडीएफ",
  pdf_to_html: "पीडीएफ से एचटीएमएल",
  pdf_to_markdown: "PDF से मार्कडाउन तक",
};
export const landing_page = {
  hero: {
    title: "पूर्ण पीडीएफ समाधान",
    description:
      "अपने पीडीएफ़ वर्कफ़्लो को अगले स्तर पर ले जाएँ - PDFEquips एक ही स्थान पर सभी आवश्यक टूल प्रदान करता है।",
  },
};
export const tool: _tool = {
  Merge_PDF: {
    title: "पीडीएफ विलय",
    description: "एक दस्तावेज में कई पीडीएफ फ़ाइलों को जोड़ें",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },
  Split_PDF: {
    title: "पीडीएफ विभाजित करें",
    description: "एक पीडीएफ फ़ाइल को कई दस्तावेजों में विभाजित करें",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
  Compress_PDF: {
    title: "पीडीएफ कम्प्रेस करें",
    description: "गुणवत्ता को बनाए रखते हुए एक पीडीएफ फ़ाइल का आकार कम करें",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  PDF_to_Powerpoint: {
    title: "PDF से पावरपॉइंट में",
    description: "PDF फ़ाइलों को संपादनीय पावरपॉइंट प्रस्तुतियों में बदलें",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG से पीडीएफ में",
    description: "JPG छवि फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "वर्ड से पीडीएफ में",
    description: "माइक्रोसॉफ्ट वर्ड फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "पावरपॉइंट से पीडीएफ में",
    description: "माइक्रोसॉफ्ट पावरपॉइंट फाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "एक्सेल से पीडीएफ में",
    description: "माइक्रोसॉफ्ट एक्सेल फ़ाइलों को पीडीएफ दस्तावेजों में बदलें",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML से पीडीएफ में",
    description: "HTML वेब पृष्ठों को पीडीएफ दस्तावेजों में बदलें",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },

  Markdown_to_PDF: {
    title: "Markdown से पीडीएफ में रूपांतरण",
    description: "Markdown से पीडीएफ में रूपांतरण",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },

  PDF_to_JPG: {
    title: "PDF से JPG में",
    description: "PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF से वर्ड में",
    description: "PDF फ़ाइलों को माइक्रोसॉफ्ट वर्ड दस्तावेजों में बदलें",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF से एक्सेल में",
    description: "PDF फ़ाइलों को माइक्रोसॉफ्ट एक्सेल दस्तावेजों में बदलें",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF से PDF/A में",
    description:
      "PDF फ़ाइलों को लंबे समय तक संचय के लिए PDF/A प्रारूप में बदलें",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "वेब से पीडीएफ",
    description: "वेब पेज को पीडीएफ दस्तावेज में रूपांतरित करें",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "पीडीएफ से टेक्स्ट",
    description: "पीडीएफ फाइल को सामान्य टेक्स्ट दस्तावेज में रूपांतरित करें",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "पीडीएफ से एचटीएमएल में",
    description: "पीडीएफ फ़ाइलों को एचटीएमएल दस्तावेज़ों में बदलें",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF से मार्कडाउन तक",
    description: "PDF फ़ाइलों को मार्कडाउन प्रारूप में रूपांतरित करें",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};
export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "PDF फ्यूज़न विकल्प",
    split_pdf: "PDF विभाजन विकल्प",
    compress_pdf: "PDF संपीड़न विकल्प",
    pdf_to_powerpoint: "PDF से पावरपॉइंट विकल्प",
    jpg_to_pdf: "JPG से PDF विकल्प",
    word_to_pdf: "WORD से PDF विकल्प",
    powerpoint_to_pdf: "पावरपॉइंट से PDF विकल्प",
    excel_to_pdf: "EXCEL से PDF विकल्प",
    html_to_pdf: "HTML से PDF विकल्प",
    pdf_to_jpg: "PDF से JPG विकल्प",
    pdf_to_word: "PDF से WORD विकल्प",
    pdf_to_excel: "PDF से EXCEL विकल्प",
    pdf_to_pdf_a: "PDF से PDF/A विकल्प",
    pdf_to_text: "पीडीएफ से टेक्स्ट विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    merge_pdf: "पीडीएफ विलय करें",
    split_pdf: "पीडीएफ विभाजित करें",
    compress_pdf: "पीडीएफ संपीड़ित करें",
    pdf_to_powerpoint: "पावरपॉइंट में रूपांतरित करें",
    jpg_to_pdf: "पीडीएफ में रूपांतरित करें",
    word_to_pdf: "पीडीएफ में रूपांतरित करें",
    powerpoint_to_pdf: "पीडीएफ में रूपांतरित करें",
    excel_to_pdf: "पीडीएफ में रूपांतरित करें",
    html_to_pdf: "पीडीएफ में रूपांतरित करें",
    pdf_to_jpg: "जेपीजी में रूपांतरित करें",
    pdf_to_word: "वर्ड में रूपांतरित करें",
    pdf_to_excel: "एक्सेल में रूपांतरित करें",
    pdf_to_pdf_a: "पीडीएफ ए के लिए रूपांतरित करें",
    pdf_to_text: "टेक्स्ट में कनवर्ट करें",
  },
  pages: "पृष्ठों",
  page: "पृष्ठ",

  compress_pdf: [
    {
      title: "सिफारिश की गई कम्प्रेशन",
      description: "आकार और गुणवत्ता के बीच सर्वश्रेष्ठ संतुलन",
    },
    {
      title: "कम कम्प्रेशन",
      description: "छोटी फ़ाइल आकार लेकिन कम गुणवत्ता",
    },
    {
      title: "अत्यधिक कम्प्रेशन",
      description: "भारी रूप से छोटी फ़ाइल आकार लेकिन बहुत कम गुणवत्ता",
    },
    {
      title: "कस्टम कम्प्रेशन",
      description: "अपनी पसंद के अनुसार कम्प्रेशन चुनें",
    },
  ],
  merge_pdf:
    "मिलाने के लिए पीडीएफ फ़ाइलों के क्रम बदलने के लिए ड्रैग एंड ड्रॉप का उपयोग करें। एक फ़ाइल पर क्लिक और   होल्ड करें, इसे इच्छित स्थान पर ले जाएँ और माउस बटन को छोड़ दें।   पीडीएफ फ़ाइलें ऊपर से नीचे तक मिलाई जाती हैं। फ़ाइल को हटाने के लिए, फ़ाइल के ऊपर हटाने वाले आइकन पर क्लिक करें। पृष्ठ को घुमाने के लिए, पृष्ठ थंबनेल के ऊपर घुमाने वाले आइकन पर क्लिक करें   और चयनित घुमाने का कोण चुनें। एक बार जब फाइल इच्छित क्रम और अभिविन्यास में हो जाती हैं, तो उन्हें एक सिंगल पीडीएफ फ़ाइल में जोड़ने के लिए 'मर्ज' बटन पर क्लिक करें।",
};

export const web2pdftool: _web2pdftool = {
  placeholder: "उदाहरण: https://pdfequips.com",
  submit_btn: "रूपांतरित करें",
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
