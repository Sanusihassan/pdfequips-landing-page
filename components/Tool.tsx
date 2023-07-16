// i think this file is very crowded, i want to extract logics, and components to other files
// what should i extract from it...
import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";

import EditPage from "./EditPage";
import { ToolStoreContext } from "../src/ToolStoreContext";
import { useRouter } from "next/router";
import type { edit_page, tools, web2pdftool } from "../content";
import { handleUpload } from "../src/handlers/handleUpload";
import { handleChange } from "../src/handlers/handleChange";
import type { errors as _ } from "../content";
import ErrorElement from "./ErrorElement";
import Web2PDF from "./Web2PDF";
import Markdown2PDF from "./Markdown2PDF";

export type errorType = {
  response: {
    data: {
      error: string;
      text: () => Promise<string>; // Add type for text() function
    };
  };
};

export type ToolData = {
  title: string;
  description: string;
  color: string;
  type: string;
};

type ToolProps = {
  data: ToolData;
  tools: tools;
  lang: string;
  errors: _;
  edit_page: edit_page;
  pages: string;
  page: string;
  web2pdftool: web2pdftool;
};

const Tool: React.FC<ToolProps> = ({
  data,
  tools,
  lang,
  errors,
  edit_page,
  pages,
  page,
  web2pdftool,
}) => {
  const state = useContext(ToolStoreContext);

  // const dispatch = useDispatch();
  const [userClickedOnFileUploader, setUserClickedOnFileUploader] =
    useState(false);

  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  let _files: FileList | null = null;
  // i want mobx version of this
  const handleHideTool = () => {
    state?.setShowTool(false);
  };
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");

  // endpoint
  // const [endpoint, setEndpoint] = useState("");
  // drag and drop input handling
  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleHideTool();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // file input change handler
  let showTool = state?.showTool && state?.errorMessage?.length > 0;
  // accepted file types
  const acceptedFileTypes = {
    ".pdf": ".pdf, .PDF",
    ".pptx": ".pptx, .ppt",
    ".docx": ".docx, .doc",
    ".xlsx": ".xlsx, .xls",
    ".jpg": ".jpg, .jpeg",
    ".html": ".html, .htm",
  };
  // @ts-ignore
  let t: NodeJS.Timer;
  // actual files;
  const [files, setFiles] = useState<File[]>([]);
  const fileInputElement = fileInput.current;
  function focusHandler() {
    t = setInterval(() => {
      let a: File[] = [];
      if (fileInputElement) {
        a = Array.from(fileInputElement.files as unknown as FileList);
        // change these to mobx syntax
        if (a.length === 0) {
          state?.setErrorMessage(errors.NO_FILES_SELECTED.message);

          state?.setErrorCode("EMPTY_FILE");
        } else if (
          state?.errorCode == "EMPTY_FILE" &&
          a.length > 0 &&
          path != "merge-pdf"
        ) {
          clearInterval(t);
          state?.resetErrorMessage();
          if (typeof window !== "undefined") {
            window.removeEventListener("focus", focusHandler);
          }
        }
      }
    }, 3000);
  }
  useEffect(() => {
    if (fileInputElement) {
      setFiles(Array.from(fileInputElement.files as unknown as FileList));
    }
    const preventDefault = (event: DragEvent) => {
      event.preventDefault();
    };
    state?.setEndpoint(path);
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("click", (e) => e.preventDefault());
    if (userClickedOnFileUploader && typeof window !== "undefined") {
      window.addEventListener("focus", focusHandler);
    }
    if (
      state?.errorCode == "ERR_EMPTY_FILE" &&
      files.length > 0 &&
      path != "merge-pdf"
    ) {
      state?.resetErrorMessage();
    }
    return () => {
      clearInterval(t);
      document.removeEventListener("dragover", preventDefault);
      if (typeof window !== "undefined") {
        window.removeEventListener("focus", focusHandler);
      }
    };
  }, [userClickedOnFileUploader, state?.rerender]);

  return (
    <>
      {path === "web-to-pdf" ? (
        <Web2PDF content={data} web2pdftool={web2pdftool} />
      ) : path === "markdown-to-pdf" ? (
        // <Markdown2PDF />
        <div>soon...</div>
      ) : (
        <div
          className="tools-page container-fluid position-relative"
          {...(state?.showTool && getRootProps())}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {isDragActive && (
            <div className="overlay display-4">{tools.drop_files}</div>
          )}
          <div
            className={`text-center ${
              !showTool ? "" : "d-flex"
            } flex-column tools ${state?.showTool ? "" : "d-none"}`}
          >
            <h2 className="display-3">
              <bdi>{data.title}</bdi>
            </h2>
            <p className="lead">
              <bdi>{data.description}</bdi>
            </p>
            <form
              onClick={(e) => {
                e.stopPropagation();
              }}
              onSubmit={(e) =>
                handleUpload(
                  e,
                  fileInput,
                  downloadBtn,
                  state,
                  errors
                )
              }
              method="POST"
              encType="multipart/form-data"
            >
              <div
                className={`upload-btn btn btn-lg text-white position-relative overflow-hidden ${path}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                role="button"
              >
                {lang == "ar" ? (
                  <bdi>
                    {tools.select} {tools.files}
                    <span className="text-uppercase">
                      {data.type.replace(".", "")}
                    </span>{" "}
                  </bdi>
                ) : (
                  <bdi>
                    {tools.select}{" "}
                    <span className="text-uppercase">
                      {data.type.replace(".", "")}
                    </span>{" "}
                    {tools.files}
                  </bdi>
                )}
                <input
                  type="file"
                  name="files"
                  accept={
                    acceptedFileTypes[
                      data.type as keyof typeof acceptedFileTypes
                    ]
                  }
                  multiple
                  ref={fileInput}
                  className="position-absolute file-input"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserClickedOnFileUploader(true);
                  }}
                  onChange={(e) => {
                    handleChange(e, state, data.type, errors);
                    state?.setRerender();
                    _files = e.target?.files;
                    if (path == "merge-pdf" && _files?.length == 1) {
                      state?.
                        setErrorMessage(errors.ERR_UPLOAD_COUNT.message)
                      
                        state?.setErrorCode("ERR_UPLOAD_COUNT")
                    } else if (
                      (_files && _files.length > 0) ||
                      (files.length > 0 && path != "merge-pdf")
                    ) {
                      state?.resetErrorMessage();
                    }
                    console.log(state?.showErrorMessage);
                  }}
                />
              </div>
              <a
                href=""
                className="d-none"
                ref={downloadBtn}
                download="__output.pdf"
              ></a>
              {/* <div className="my-4">
          </div> */}
              <button type="submit" ref={submitBtn} className="d-none">
                submit
              </button>
            </form>
            <p>{tools.or_drop}</p>
            {state?.showErrorMessage && userClickedOnFileUploader ? (
              <ErrorElement state={state} />
            ) : null}
          </div>
          {/* ) : ( */}
          <EditPage
            extension={data.type}
            submitBtn={submitBtn}
            edit_page={edit_page}
            pages={pages}
            page={page}
            lang={lang}
            errors={errors}
            fileInput={fileInput}
          />
          {/* )} */}
        </div>
      )}
    </>
  );
};

export default Tool;
