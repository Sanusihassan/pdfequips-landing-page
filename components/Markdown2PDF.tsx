import dynamic from 'next/dynamic';
import ReactMarkdown from "react-markdown";
import { useState } from "react";

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

const Markdown2PDF: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("# hello world");

  const handleEditorChange = (value) => {
    setMarkdown(value);
  }

  return (
    <div className="md-2pdf">
      <MonacoEditor
        language="markdown"
        theme="vs-dark"
        value={markdown}
        onChange={handleEditorChange}
        options={{ selectOnLineNumbers: true }}
      />
      <div className="react-markdown-container">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}

export default Markdown2PDF;
