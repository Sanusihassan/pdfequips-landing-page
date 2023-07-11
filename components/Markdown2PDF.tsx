import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
/**
 * syntax highlighting and auto completion are not working with the ace editor
 */


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Markdown2PDF: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("# hello world");
  const [AceEditorComponent, setAceEditorComponent] = useState<any>(null);

  function handleMarkdownChange(value: string) {
    setMarkdown(value);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-ace")
        .then((module) => {
          setAceEditorComponent(() => module.default);
          import("ace-builds/src-min-noconflict/mode-markdown");
          import("ace-builds/src-min-noconflict/theme-github");
        })
        .catch((error) => {
          console.error("Failed to load AceEditor", error);
        });
    }
  }, []);

  return (
    <div className="md-2pdf">
      {AceEditorComponent && typeof AceEditorComponent === "function" && (
        <AceEditorComponent
          className="textarea"
          mode="markdown"
          theme="github"
          name="markdown-editor"
          fontSize="16px"
          value={markdown}
          onChange={handleMarkdownChange}
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="100%"
          setOptions={{ useWorker: false, showLineNumbers: true }}
        />
      )}
      <div className="react-markdown-container">
        <ReactMarkdown
          children={markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={theme}
                  language={match[1]}
                  PreTag="div"
                  fontSize="1em"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default Markdown2PDF;
