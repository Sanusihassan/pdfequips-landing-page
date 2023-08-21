import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import UploadFileIcon from "./icons/UploadFile";
import type { translate_pdf } from "../content";

interface Props {
  onFilesSelected: (files: FileList) => void;
  translate_pdf: translate_pdf;
}

const TranslateFileSelector: React.FC<Props> = ({
  onFilesSelected,
  translate_pdf,
}) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setFiles(e.dataTransfer.files);
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 0) {
      setFiles(e.target.files);
      onFilesSelected(e.target.files!);
    }
  };

  // useEffect(() => {
  //   console.log(translate_pdf);
  // }, []);

  return (
    <div className="container">
      <Row className="border rounded p-3 translate-file-selector mb-3">
        <Col className="d-sm-flex flex-column align-items-center justify-content-center d-none">
          <UploadFileIcon className="w-25 mx-auto h-auto" />
          <div
            className="dropzone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p className="text-center">{translate_pdf.drag_and_drop}</p>
          </div>
        </Col>

        <div className="d-none d-sm-flex align-items-center devider">
          {/* <div className="divider"></div> */}
        </div>

        <Col className="d-flex flex-column juustify-content-center align-items-center file-selector ">
          {/* <Form.Control type="file" multiple onChange={handleChange} /> */}
          <p className="text-center d-none d-sm-block">
            {translate_pdf.or_choose_file}
          </p>
          <button
            className="upload-btn mx-auto btn btn-lg text-white position-relative overflow-hidden translate-pdf"
            onClick={() => {}}
          >
            <input
              type="file"
              className="position-absolute top-0 left-0 opacity-0"
              accept=".pdf"
              onChange={handleChange}
            />
            {translate_pdf.browse_file}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default TranslateFileSelector;
