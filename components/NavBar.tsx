import { Navbar, Nav } from "react-bootstrap";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, resetErrorMessage, showTool } from "../src/store";

import LanguageIcon from "./icons/LanguageIcon";
import { Dropdown } from "react-bootstrap";

import type { nav_content } from "../content";
import { useRouter } from "next/router";
import ConvertPDFDropdown from "./NavBar/ConvertDropDown";
import LanguageDropdown from "./NavBar/LanguageDropDown";
/**
 * this code works fine for the all pages but the home page where there are no sub routes but the /lang route
 * and it's setting the path variable to undefined
 */

const NavBar = ({
  nav_content,
  lang,
}: {
  nav_content: nav_content;
  lang: string;
}) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    if (state.files.length > 0) {
      dispatch(showTool());
    }
    dispatch(resetErrorMessage());
  }
  let langPath = lang.length > 0 ? `/${lang}/` : "/";
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Link href={`/${lang}`}>
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
          <span
            style={{
              marginTop: "7.1%",
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            {nav_content.brand}
          </span>
        </a>
      </Link>

      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="align-items-center">
          <Link href={`${langPath}merge-pdf`}>
            <a onClick={handleClick} className="dropdown-item">
              <bdi>{nav_content.merge_pdf}</bdi>
            </a>
          </Link>
          <Link className="dropdown-item" href={`${langPath}split-pdf`}>
            <a onClick={handleClick} className="dropdown-item">
              <bdi>{nav_content.split_pdf}</bdi>
            </a>
          </Link>
          <Link className="dropdown-item" href={`${langPath}compress-pdf`}>
            <a onClick={handleClick} className="dropdown-item">
              <bdi>{nav_content.compress_pdf}</bdi>
            </a>
          </Link>
          <ConvertPDFDropdown
            handleClick={handleClick}
            langPath={langPath}
            nav_content={nav_content}
          />
          <LanguageDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;