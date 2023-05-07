import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  DocumentAddIcon,
  PhotographIcon,
  DocumentIcon,
  PresentationChartBarIcon,
  TableIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, showTool } from "../src/store";

// import { ToolContext } from "../pages/[tool]";
// import Image from "next/image";

// import { a } from "react-router-dom";
// import store from "../store";
// import { encode } from "base-64";

const NavBar = () => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    if (state.files.length > 0) {
      dispatch(showTool());
      console.log(state.showTool);
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Link href="/">
        <a
          onClick={handleClick}
          className="text-decoration-none text-dark text-nowrap navbar-brand d-flex flex-row justify-content-between align-items-center"
          style={{
            fontSize: "0.95em",
            lineHeight: 2,
          }}
        >
          <img
            src="/logo.png"
            className="img-fluid"
            alt="pdfequips logo"
            width="35"
            height="20"
            draggable="false"
            style={{
              objectFit: "cover",
            }}
          />
          equips
        </a>
      </Link>

      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="align-items-center">
          <Link href="/merge-pdf">
            <a onClick={handleClick} className="dropdown-item">
              MERGE PDF
            </a>
          </Link>
          <Link className="dropdown-item" href="/split-pdf">
            <a onClick={handleClick} className="dropdown-item">
              SPLIT PDF
            </a>
          </Link>
          <Link className="dropdown-item" href="/compress-pdf">
            <a onClick={handleClick} className="dropdown-item">
              COMPRESS PDF
            </a>
          </Link>
          <NavDropdown
            title="CONVERT PDF"
            id="basic-nav-dropdown"
            className="w-100"
          >
            <div className="d-flex flex-row w-100 flex-wrap drop-down-container">
              <div className="col-12 col-md-6">
                <h6 className="pl-2">CONVERT TO PDF</h6>
                <Link href="/jpg-to-pdf">
                  <a onClick={handleClick} className="dropdown-item">
                    <PhotographIcon
                      style={{
                        color: "#f1c40f",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                    JPG to PDF
                  </a>
                </Link>
                <Link href="/word-to-pdf">
                  <a onClick={handleClick} className="dropdown-item">
                    <DocumentIcon
                      style={{
                        color: "#1B5EBE",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                    WORD to PDF
                  </a>
                </Link>
                <Link className="dropdown-item" href="/powerpoint-to-pdf">
                  <a onClick={handleClick} className="dropdown-item">
                    <PresentationChartBarIcon
                      style={{
                        color: "#C13B1B",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                    POWERPOINT to PDF
                  </a>
                </Link>
                <Link className="dropdown-item" href="/excel-to-pdf">
                  <a onClick={handleClick} className="dropdown-item">
                    <TableIcon
                      style={{
                        color: "#10793F",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                    EXCEL to PDF
                  </a>
                </Link>
                <Link className="dropdown-item" href="/html-to-pdf">
                  <a onClick={handleClick} className="dropdown-item">
                    <CodeIcon className="h-5 w-5 inline-block mr-2 html" />
                    HTML to PDF
                  </a>
                </Link>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="pl-2">CONVERT FROM PDF</h6>
                <Link className="dropdown-item" href="/pdf-to-jpg">
                  <a onClick={handleClick} className="dropdown-item">
                    PDF to JPG{" "}
                    <PhotographIcon
                      style={{
                        color: "#f1c40f",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                  </a>
                </Link>
                <Link className="dropdown-item" href="/pdf-to-word">
                  <a onClick={handleClick} className="dropdown-item">
                    PDF to WORD{" "}
                    <DocumentIcon
                      style={{
                        color: "#1B5EBE",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                  </a>
                </Link>
                <Link className="dropdown-item" href="/pdf-to-powerpoint">
                  <a onClick={handleClick} className="dropdown-item">
                    PDF to POWERPOINT{" "}
                    <PresentationChartBarIcon
                      style={{
                        color: "#C13B1B",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                  </a>
                </Link>
                <Link className="dropdown-item" href="/pdf-to-excel">
                  <a onClick={handleClick} className="dropdown-item">
                    PDF to EXCEL{" "}
                    <TableIcon
                      style={{
                        color: "#10793F",
                      }}
                      className="h-5 w-5 inline-block mr-2"
                    />
                  </a>
                </Link>
                <Link href="pdf-to-pdf-a">
                  <a onClick={handleClick} className="dropdown-item">
                    PDF to PDF/A{" "}
                    <DocumentAddIcon className="h-5 w-5 inline-block mr-2" />
                  </a>
                </Link>
              </div>
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
