import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
// @ts-ignore
import md from "./defaultcontent.md";
const Loader = () => (
  <div className="editor-loader">
    <Spinner animation="grow" />
    <p className="lead">please wait...</p>
  </div>
);

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
  loading: () => <Loader />,
});

const Markdown2PDF: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(md);

  const handleEditorChange = (value: string) => {
    setMarkdown(value);
  };

  return (
    <div className="md-2pdf">
      <div className="editor">
        <MonacoEditor
          language="markdown"
          theme="vs-light"
          value={markdown}
          onChange={handleEditorChange}
          options={{ selectOnLineNumbers: true }}
        />
      </div>
      <div className="react-markdown-container">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
};

export default Markdown2PDF;
