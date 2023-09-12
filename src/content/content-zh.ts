import type {
  nav_content as _nav_content,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";
export const nav_content: _nav_content = {
  brand: "Equips",
  merge_pdf: "合并PDF",
  split_pdf: "拆分PDF",
  compress_pdf: "压缩PDF",
  convert_pdf: "转换PDF",
  convert_to_pdf: "转换为PDF",
  jpg_to_pdf: "JPG转PDF",
  word_to_pdf: "Word转PDF",
  markdown_to_pdf: "降价到 PDF",
  powerpoint_to_pdf: "PowerPoint转PDF",
  excel_to_pdf: "Excel转PDF",
  html_to_pdf: "HTML转PDF",
  web_to_pdf: "网页转 PDF",
  convert_from_pdf: "从PDF转换",
  read_edit_pdf: "阅读和编辑 PDF",
  pdf_to_jpg: "PDF转JPG",
  pdf_to_word: "PDF转Word",
  pdf_to_powerpoint: "PDF转PowerPoint",
  pdf_to_excel: "PDF转Excel",
  pdf_to_pdf_a: "PDF转PDF/A",
  pdf_to_text: "PDF 转文本",
  pdf_to_html: "PDF 到 HTML",
  pdf_to_markdown: "PDF 到 Markdown",
};

export const landing_page: _landing_page = {
  hero: {
    title: "利用我们全面的 PDF 解决方案提高您的工作效率",
    description:
      "将您的 PDF 工作流程提升到新的水平 - 使用我们的综合工具包解锁新的可能性。",
  },
  features: {
    title: "PDFEquips 如何简化您的 PDF 任务",
    description:
      "PDFEquips 为您提供了一系列功能，让您轻松处理 PDF 文件。无论您想要合并、分割、压缩、转换、编辑或保护您的 PDF，您都可以用几下点击完成。PDFEquips 快速、可靠、安全。",
  },
  why_us: {
    title: "您可以信赖的 PDF 解决方案",
    description:
      "PDFEquips 是您管理 PDF 的终极网络应用程序。享受所有\
    您需要高效处理数字文档的功能\
    同时保证您的数据安全和隐私。",
  },
};

export const tool: _tool = {
  Merge_PDF: {
    title: "合并PDF",
    description: "将多个PDF文件合并成一个文档",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
  },

  Compress_PDF: {
    title: "压缩PDF",
    description: "在保持质量的同时减小PDF文件的大小",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
  },
  Translate_PDF: {
    title: "翻译 PDF",
    description: "将 PDF 文件中的文本翻译成另一种语言",
    color: "#185abc",
    type: ".pdf",
    to: "/translate-pdf",
  },
  Lock_PDF: {
    title: "锁定 PDF",
    description:
      "使用密码保护您的 PDF 文件，以防止未经授权的访问。",
    color: "#2980b9",
    type: ".pdf",
    to: "/lock-pdf",
  },

  Unlock_PDF: {
    title: "解锁 PDF",
    description:
      "使用我们的用户友好工具轻松地从您的 PDF 文件中移除密码保护。",
    color: "#3498db",
    type: ".pdf",
    to: "/unlock-pdf",
  },

  PDF_to_Powerpoint: {
    title: "PDF转Powerpoint",
    description: "将PDF文件转换为可编辑的Powerpoint演示文稿",
    color: "#C13B1B",
    type: ".pdf",
    to: "/pdf-to-powerpoint",
  },
  JPG_to_PDF: {
    title: "JPG转PDF",
    description: "将JPG图像文件转换为PDF文档",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  WORD_to_PDF: {
    title: "WORD转PDF",
    description: "将Microsoft Word文件转换为PDF文档",
    color: "#1B5EBE",
    type: ".docx",
    to: "/word-to-pdf",
  },
  POWERPOINT_to_PDF: {
    title: "POWERPOINT转PDF",
    description: "将Microsoft Powerpoint文件转换为PDF文档",
    color: "#C13B1B",
    type: ".pptx",
    to: "/powerpoint-to-pdf",
  },
  EXCEL_to_PDF: {
    title: "EXCEL转PDF",
    description: "将Microsoft Excel文件转换为PDF文档",
    color: "#10793F",
    type: ".xlsx",
    to: "/excel-to-pdf",
  },
  HTML_to_PDF: {
    title: "HTML转PDF",
    description: "将HTML网页转换为PDF文档",
    color: "rgb(228, 77, 38)",
    type: ".html",
    to: "/html-to-pdf",
  },
  Markdown_to_PDF: {
    title: "Markdown 转 PDF",
    description: "将 Markdown 转换为 PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF转JPG",
    description: "将PDF文件转换为JPG图像文件",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_WORD: {
    title: "PDF转WORD",
    description: "将PDF文件转换为Microsoft Word文档",
    color: "#1B5EBE",
    type: ".pdf",
    to: "/pdf-to-word",
  },

  PDF_to_EXCEL: {
    title: "PDF转EXCEL",
    description: "将PDF文件转换为Microsoft Excel文档",
    color: "#10793F",
    type: ".pdf",
    to: "/pdf-to-excel",
  },

  PDF_to_PDF_A: {
    title: "PDF转PDF/A",
    description: "将PDF文件转换为PDF/A格式以进行长期归档",
    color: "#000000",
    type: ".pdf",
    to: "/pdf-to-pdf-a",
  },

  Web_to_PDF: {
    title: "网页转PDF",
    description: "将网页转换为PDF文档",
    color: "#0984e3",
    type: ".pdf",
    to: "/web-to-pdf",
  },

  PDF_to_Text: {
    title: "PDF转文本",
    description: "将PDF文件转换为纯文本文档",
    color: "#4493e1",
    type: ".pdf",
    to: "/pdf-to-text",
  },

  PDF_to_HTML: {
    title: "PDF 转 HTML",
    description: "将 PDF 文件转换为 HTML 文档",
    color: "rgb(228, 77, 38)",
    type: ".pdf",
    to: "/pdf-to-html",
  },

  PDF_to_Markdown: {
    title: "PDF 转 Markdown",
    description: "将 PDF 文件转换为 Markdown 格式",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": ["PDF文件已合并！", "PDF文件已合并！"],
    "split-pdf": ["PDF文件已拆分！"],
    "compress-pdf": ["PDF文件已压缩！", "PDF文件已压缩！"],
    "pdf-to-powerpoint": [
      "PDF文件已转换为PowerPoint！",
      "PDF文件已转换为PowerPoint！",
    ],
    "jpg-to-pdf": ["JPG文件已转换为PDF！", "JPG文件已转换为PDF！"],
    "word-to-pdf": ["Word文件已转换为PDF！", "Word文件已转换为PDF！"],
    "powerpoint-to-pdf": [
      "PowerPoint文件已转换为PDF！",
      "PowerPoint文件已转换为PDF！",
    ],
    "excel-to-pdf": ["Excel文件已转换为PDF！", "Excel文件已转换为PDF！"],
    "html-to-pdf": ["HTML文件已转换为PDF！", "HTML文件已转换为PDF！"],
    "pdf-to-jpg": ["PDF文件已转换为JPG！", "PDF文件已转换为JPG！"],
    "pdf-to-word": ["PDF文件已转换为Word！", "PDF文件已转换为Word！"],
    "pdf-to-excel": ["PDF文件已转换为Excel！", "PDF文件已转换为Excel！"],
    "pdf-to-pdf-a": ["PDF文件已转换为PDF/A！", "PDF文件已转换为PDF/A！"],
    "web-to-pdf": ["网站已转换为PDF！", "网站已转换为PDF！"],
    "pdf-to-text": ["PDF文件已转换为文本！", "PDF文件已转换为文本！"],
    "markdown-to-pdf": [
      "Markdown文件已转换为PDF！",
      "Markdown文件已转换为PDF！",
    ],
    "pdf-to-html": ["PDF文件已转换为HTML！", "PDF文件已转换为HTML！"],
    "pdf-to-markdown": [
      "PDF文件已转换为Markdown！",
      "PDF文件已转换为Markdown！",
    ],
  },
  btnText: {
    "merge-pdf": ["下载合并后的PDF文件", "下载合并后的PDF文件"],
    "split-pdf": ["下载拆分后的PDF文件", "下载拆分后的PDF文件"],
    "compress-pdf": ["下载压缩后的PDF文件", "下载压缩后的PDF文件"],
    "pdf-to-powerpoint": [
      "下载转换后的PowerPoint文件",
      "下载转换后的PowerPoint文件",
    ],
    "jpg-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "word-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "powerpoint-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "excel-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "html-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-jpg": ["下载转换后的JPG文件", "下载转换后的JPG文件"],
    "pdf-to-word": ["下载转换后的Word文件", "下载转换后的Word文件"],
    "pdf-to-excel": ["下载转换后的Excel文件", "下载转换后的Excel文件"],
    "pdf-to-pdf-a": ["下载转换后的PDF/A文件", "下载转换后的PDF/A文件"],
    "web-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-text": ["下载转换后的文本文件", "下载转换后的文本文件"],
    "markdown-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-html": ["下载转换后的HTML文件", "下载转换后的HTML文件"],
    "pdf-to-markdown": ["下载转换后的Markdown文件", "下载转换后的Markdown文件"],
  },
  backto: {
    "merge-pdf": "返回合并PDF",
    "split-pdf": "返回拆分PDF",
    "compress-pdf": "返回压缩PDF",
    "pdf-to-powerpoint": "返回PDF转Powerpoint",
    "jpg-to-pdf": "返回JPG转PDF",
    "word-to-pdf": "返回Word转PDF",
    "powerpoint-to-pdf": "返回Powerpoint转PDF",
    "excel-to-pdf": "返回Excel转PDF",
    "html-to-pdf": "返回HTML转PDF",
    "pdf-to-jpg": "返回PDF转JPG",
    "pdf-to-word": "返回PDF转Word",
    "pdf-to-excel": "返回PDF转Excel",
    "pdf-to-pdf-a": "返回PDF转PDF-A",
    "web-to-pdf": "返回Web转PDF",
    "pdf-to-text": "返回PDF转文本",
    "markdown-to-pdf": "返回Markdown转PDF",
    "pdf-to-html": "返回PDF转HTML",
    "pdf-to-markdown": "返回PDF转Markdown",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "合并PDF选项",
    split_pdf: "拆分PDF选项",
    compress_pdf: "压缩PDF选项",
    pdf_to_powerpoint: "PDF转Powerpoint选项",
    jpg_to_pdf: "JPG转PDF选项",
    word_to_pdf: "WORD转PDF选项",
    powerpoint_to_pdf: "Powerpoint转PDF选项",
    excel_to_pdf: "EXCEL转PDF选项",
    html_to_pdf: "HTML转PDF选项",
    pdf_to_jpg: "PDF转JPG选项",
    pdf_to_word: "PDF转WORD选项",
    pdf_to_excel: "PDF转EXCEL选项",
    pdf_to_pdf_a: "PDF转PDF/A选项",
    pdf_to_text: "PDF 转文本选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    merge_pdf: "合并PDF",
    split_pdf: "拆分PDF",
    compress_pdf: "压缩PDF",
    pdf_to_powerpoint: "转换为PowerPoint",
    jpg_to_pdf: "转换为PDF",
    word_to_pdf: "转换为PDF",
    powerpoint_to_pdf: "转换为PDF",
    excel_to_pdf: "转换为PDF",
    html_to_pdf: "转换为PDF",
    pdf_to_jpg: "转换为JPG",
    pdf_to_word: "转换为Word",
    pdf_to_excel: "转换为Excel",
    pdf_to_pdf_a: "转换为PDF/A",
    pdf_to_text: "转换为文本",
    translate_pdf: "翻译 PDF",
  },
  pages: "页",
  page: "页",
  compress_pdf: [
    {
      title: "推荐压缩",
      description: "文件大小和质量之间的最佳平衡",
    },
    {
      title: "较少压缩",
      description: "较小的文件大小但质量较低",
    },
    {
      title: "极度压缩",
      description: "文件大小显著减小但质量明显降低",
    },
    {
      title: "自定义压缩",
      description: "选择自己的压缩量",
    },
  ],
  merge_pdf:
    "使用拖放改变PDF文件合并的顺序。单击并   按住一个文件,将其移动到所需位置,然后释放鼠标按钮。   PDF文件从上到下合并。要删除文件,请单击文件顶部的删除   图标。要旋转页面,请单击页面缩略图顶部的旋转图标,然后选择所需的旋转角度。文件处于   所需的顺序和方向,单击“合并”按钮将它们合并为一个PDF文件。",
};

export const web2pdftool: _web2pdftool = {
  placeholder: "例如：https://pdfequips.com",
  submit_btn: "转换",
};

export const translate_pdf = {
  drag_and_drop: "将文件拖放到这里",
  or_choose_file: "或选择一个文件",
  browse_file: "浏览您的文件",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
