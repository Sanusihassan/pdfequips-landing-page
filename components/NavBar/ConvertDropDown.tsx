/**
 * in this component i
 */
import {
  PhotographIcon,
  DocumentIcon,
  PresentationChartBarIcon,
  TableIcon,
  CodeIcon,
  DocumentAddIcon,
  GlobeIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";
import type { nav_content } from "../../content";
import MarkdownIcon from "../icons/Markdown";

import { useDispatch, useSelector } from "react-redux";
import { setPath, ToolState } from "../../src/store";

const ConvertPDFDropdown = ({
  langPath,
  handleClick,
  nav_content,
}: {
  langPath: string;
  handleClick: () => void;
  nav_content: nav_content;
}) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  return (
    <>
      <NavDropdown
        title={nav_content.convert_pdf}
        id="basic-nav-dropdown"
        className="w-100 convert-dropdown dropdown-wrapper"
      >
        <div className="d-flex flex-row w-100 flex-wrap drop-down-container">
          <div className="col-12 col-md-6">
            <h6 className="converter-title">
              {" "}
              <bdi>{nav_content.convert_to_pdf}</bdi>{" "}
            </h6>
            <Link href={`${langPath}jpg-to-pdf`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("jpg-to-pdf"));
                }}
                className="dropdown-item"
              >
                <PhotographIcon
                  style={{
                    color: "#f1c40f",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />{" "}
                <bdi>{nav_content.jpg_to_pdf}</bdi>{" "}
              </a>
            </Link>
            <Link href={`${langPath}word-to-pdf`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("word-to-pdf"));
                }}
                className="dropdown-item"
              >
                <DocumentIcon
                  style={{
                    color: "#1B5EBE",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />{" "}
                <bdi>{nav_content.word_to_pdf}</bdi>{" "}
              </a>
            </Link>
            <Link
              className="dropdown-item"
              href={`${langPath}powerpoint-to-pdf`}
            >
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("powerpoint-to-pdf"));
                }}
                className="dropdown-item"
              >
                <PresentationChartBarIcon
                  style={{
                    color: "#C13B1B",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />{" "}
                <bdi>{nav_content.powerpoint_to_pdf}</bdi>{" "}
              </a>
            </Link>
            <Link className="dropdown-item" href={`${langPath}excel-to-pdf`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("excel-to-pdf"));
                }}
                className="dropdown-item"
              >
                <TableIcon
                  style={{
                    color: "#10793F",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />{" "}
                <bdi>{nav_content.excel_to_pdf}</bdi>{" "}
              </a>
            </Link>
            <Link className="dropdown-item" href={`${langPath}html-to-pdf`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("html-to-pdf"));
                }}
                className="dropdown-item"
              >
                <CodeIcon className="h-5 w-5 inline-block mr-2 html" />{" "}
                <bdi>{nav_content.html_to_pdf}</bdi>{" "}
              </a>
            </Link>
            {/* <Link className="dropdown-item" href={`${langPath}web-to-pdf`}>
              <a onClick={handleClick} className="dropdown-item">
                <GlobeIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
                <bdi>{nav_content.web_to_pdf}</bdi>{" "}
              </a>
            </Link> */}
            {/* <Link className="dropdown-item" href={`${langPath}markdown-to-pdf`}>
              <a onClick={handleClick} className="dropdown-item">
                <MarkdownIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
                <bdi>{nav_content.markdown_to_pdf}</bdi>{" "}
              </a>
            </Link> */}
          </div>
          <div className="col-12 col-md-6">
            <h6 className="converter-title">
              {" "}
              <bdi>{nav_content.convert_from_pdf}</bdi>{" "}
            </h6>
            <Link className="dropdown-item" href={`${langPath}pdf-to-jpg`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-jpg"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_jpg}</bdi>{" "}
                <PhotographIcon
                  style={{
                    color: "#f1c40f",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />
              </a>
            </Link>
            <Link className="dropdown-item" href={`${langPath}pdf-to-word`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-word"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_word}</bdi>{" "}
                <DocumentIcon
                  style={{
                    color: "#1B5EBE",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />
              </a>
            </Link>
            <Link
              className="dropdown-item"
              href={`${langPath}pdf-to-powerpoint`}
            >
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-powerpoint"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_powerpoint}</bdi>{" "}
                <PresentationChartBarIcon
                  style={{
                    color: "#C13B1B",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />
              </a>
            </Link>
            <Link className="dropdown-item" href={`${langPath}pdf-to-excel`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-excel"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_excel}</bdi>{" "}
                <TableIcon
                  style={{
                    color: "#10793F",
                  }}
                  className="h-5 w-5 inline-block mr-2"
                />
              </a>
            </Link>
            <Link href={`${langPath}pdf-to-pdf-a`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-pdf-a"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_pdf_a}</bdi>{" "}
                <DocumentAddIcon className="h-5 w-5 inline-block mr-2" />
              </a>
            </Link>
            <Link href={`${langPath}pdf-to-text`}>
              <a
                onClick={() => {
                  handleClick();
                  dispatch(setPath("pdf-to-text"));
                }}
                className="dropdown-item"
              >
                {" "}
                <bdi>{nav_content.pdf_to_text}</bdi>{" "}
                <DocumentTextIcon className="h-5 w-5 inline-block mr-2 text" />
              </a>
            </Link>
            {/* <Link href={`${langPath}pdf-to-html`}>
              <a onClick={handleClick} className="dropdown-item">
                {" "}
                <bdi>{nav_content.pdf_to_html}</bdi>{" "}
                <CodeIcon className="h-5 w-5 inline-block mr-2 html" />
              </a>
            </Link>
            <Link href={`${langPath}pdf-to-markdown`}>
              <a onClick={handleClick} className="dropdown-item">
                {" "}
                <bdi>{nav_content.pdf_to_markdown}</bdi>{" "}
                <MarkdownIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
              </a>
            </Link> */}
          </div>
        </div>
      </NavDropdown>
    </>
  );
};

export default ConvertPDFDropdown;
