import {
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";

import { ExclamationCircleIcon } from "@heroicons/react/solid";

import axios, { AxiosResponse } from "axios";
import { downloadConvertedFile } from "./src/downloadFile";
import EditPage from "./components/EditPage";
import { useDispatch, useSelector } from "react-redux";
import {
  ToolState,
  hideTool,
  setFiles,
  setFilesFromList,
  showTool,
} from "./src/store";

type errorType = {
  response: {
    data: {
      error: string;
      text: () => Promise<string>; // Add type for text() function
    };
  };
};

type ToolData = {
  title: string;
  description: string;
  color: string;
  type: string;
};

type ToolProps = {
  data: ToolData;
};

const Tool: React.FC<ToolProps> = ({ data }) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();

  const handleShowTool = () => {
    dispatch(showTool());
  };

  const handleHideTool = () => {
    dispatch(hideTool());
  };

  // endpoint
  const [endpoint, setEndpoint] = useState("");
  useEffect(() => {
    setEndpoint(data.title.replace(/[\s/]+/g, "-").toLowerCase());

    const preventDefault = (event: DragEvent) => {
      event.preventDefault();
    };
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("click", (e) => e.preventDefault());
    // if (_color != data.color) {
    // }
    return () => {
      document.removeEventListener("dragover", preventDefault);
    };
  }, []);

  // drag and drop input handling
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // console.log(acceptedFiles as unknown as FileList);

    // Do something with the dropped files, such as upload them to a server

    dispatch(setFiles(Array.from(acceptedFiles)));
    handleHideTool();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // file input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _files = (e.target?.files as FileList) || null;

    dispatch(setFilesFromList(_files));

    const file = _files[0] || null;
    if (!file) {
      return;
    }

    if (!file.name) {
      return;
    }

    if (!file.type) {
      return;
    }

    let allowedMimeTypes = [
      "application/pdf",
      "text/html",
      "image/jpeg",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (!allowedMimeTypes.includes(file.type)) {
      setShowErrorMessage(true);
      return;
    }
    handleHideTool();
    // submitBtn?.current?.click();
  };

  // form submit handler
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const files = (fileInput.current as HTMLInputElement).files;
    if (!files) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    let url;
    if (process.env.NODE_ENV === "development") {
      url = `http://127.0.0.1:5000/${endpoint}`;
      console.log("Running in development mode");
    } else {
      url = `/${endpoint}`;
    }
    console.log(url);

    try {
      const response = await axios.post(url, formData, {
        responseType: "blob",
      });

      const originalFileName = files[0]?.name
        ?.split(".")
        .slice(0, -1)
        .join(".");

      if (
        data.type == ".jpg" ||
        data.type == ".docx" ||
        data.type == ".html" ||
        data.type == ".xlsx"
      ) {
        downloadConvertedFile(
          response,
          "application/pdf",
          `${originalFileName}.pdf`,
          downloadBtn
        );
      } else if (data.type === ".pdf") {
        let output;
        if (data.title == "PDF to WORD") {
          output = `${originalFileName}.docx`;
        } else if (data.title == "PDF to EXCEL") {
          output = `${originalFileName}.xlsx`;
        } else if (data.title == "EXCEL to PDF") {
          output = `${originalFileName}_output.pdf`;
        } else if (data.title == "PDF to Powerpoint") {
          output = `${originalFileName}_output.pptx`;
        } else {
          output = `${originalFileName}_output.pdf`;
        }
        downloadConvertedFile(response, "application/pdf", output, downloadBtn);
      } else if (data.type == ".pptx") {
        downloadConvertedFile(
          response,
          "application/pdf",
          `${originalFileName}_output.pdf`,
          downloadBtn
        );
      }

      setShowErrorMessage(false);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);

      setShowErrorMessage(true);
      setErrorMessage((error as errorType)?.response?.data.error);
    }
  };

  return (
    <>
      <div
        className="tools-page container-fluid position-relative"
        {...(state.showTool && getRootProps())}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {isDragActive && (
          <div className="overlay display-4">Drag files here</div>
        )}
        {/* i don't want to make the element accept drag and drop if state.showTool is false */}
        {state.showTool ? (
          <div className="text-center d-flex flex-column tools">
            <h2 className="display-3">{data.title}</h2>
            <p className="lead">{data.description}</p>
            <form
              onClick={(e) => {
                e.stopPropagation();
              }}
              onSubmit={handleUpload}
              // method="POST"
              encType="multipart/form-data"
            >
              <div
                className={`upload-btn btn btn-lg text-white position-relative overflow-hidden ${data.title.replace(
                  /[\s/]+/g,
                  "-"
                )}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                // type="button"
                role="button"
              >
                Select{" "}
                <span className="text-uppercase">
                  {data.type.replace(".", "")}
                </span>{" "}
                files
                <input
                  type="file"
                  name="files"
                  accept={data.type}
                  multiple
                  ref={fileInput}
                  className="position-absolute file-input"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={handleChange}
                  // onFocusout={checkIfPDF}
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
            <p>or drop PDFs here</p>
            {showErrorMessage ? (
              <div className="alert alert-danger" role="alert">
                <ExclamationCircleIcon
                  className="w-5 h-5"
                  viewBox="0 0 22 22"
                />{" "}
                {errorMessage ? (
                  <div className="d-inline-flex">{errorMessage}</div>
                ) : (
                  <>
                    <strong>Sorry, </strong>
                    the file you uploaded is not in the required format. Please
                    upload a<strong> {data.type.replace(".", "")} </strong>{" "}
                    file, which is the only format currently supported.
                  </>
                )}
              </div>
            ) : null}
          </div>
        ) : (
          <EditPage title={data.title} extension={data.type} />
        )}
      </div>
    </>
  );
};

export default Tool;
