import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from 'react-bootstrap/Button';

// types
import type { edit_page, translate_pdf } from "../content";
import { SubmitBtn } from "./EditArea/SubmitBtn";
import { Row } from "react-bootstrap";
import { ArrowRightIcon } from "@heroicons/react/solid";
import TranslateFileSelector from "./TranslateFileSelector";
import { ToolData } from "./Tool";

interface TranslatePDFProps {
  edit_page: edit_page;
  k: string;
  data: ToolData;
  translate_pdf: translate_pdf
}

const TranslatePDF: React.FC<TranslatePDFProps> = ({
  edit_page,
  k,
  data,
  translate_pdf
}) => {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");

  const handleFromLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromLanguage(event.target.value);
  };

  const handleToLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToLanguage(event.target.value);
  };

  const handleSubmit = () => {
    // Handle translation logic
  };

  return (
    <div className="mt-3 translate-pdf">
      <h1 className="text-center display-3">{data.title}</h1>
      <p className="lead text-center">{data.description}</p>
      <div className="d-flex align-items-center">
        <Dropdown className="col">
          <Dropdown.Toggle
            variant="light"
            id="fromLanguageDropdown"
            className="w-100"
          >
            <span className="d-inline-block w-100">
              {fromLanguage || "Select from language"}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              width: "95%",
            }}
          >
            {/* Render dropdown items for available languages */}
            <Dropdown.Item
              className="w-90"
              onClick={() => handleFromLanguageChange("en")}
            >
              English
            </Dropdown.Item>
            <Dropdown.Item
              className="w-90"
              onClick={() => handleFromLanguageChange("en")}
            >
              English
            </Dropdown.Item>
            {/* Add more dropdown items as needed */}
          </Dropdown.Menu>
        </Dropdown>

        <ArrowRightIcon className="icon" />

        <Dropdown className="col">
          <Dropdown.Toggle
            variant="light"
            id="toLanguageDropdown"
            className="w-100"
          >
            {toLanguage || "Select to language"}
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              width: "95%",
            }}
          >
            {/* Render dropdown items for available languages */}
            <Dropdown.Item onClick={() => handleToLanguageChange("fr")}>
              French
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleToLanguageChange("fr")}>
              French
            </Dropdown.Item>
            {/* Add more dropdown items as needed */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <TranslateFileSelector translate_pdf={translate_pdf} onFilesSelected={() => {}} />
      <Row className="justify-content-center mt-3 w-25 mx-auto">
        {/* <SubmitBtn edit_page={edit_page} k={k} /> */}
      </Row>
    </div>
  );
};

export default TranslatePDF;
