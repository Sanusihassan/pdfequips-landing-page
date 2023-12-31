/**
 * this is still not working, footer.tsx
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import type { footer, nav_content } from "../content";
import LanguageDropdown from "pdfequips-navbar/components/LanguageDropdown";
import { getNavContent } from "./NavBar/getNavContent";

const Footer = ({ footer, lang }: { footer: footer; lang: string }) => {
  let text = "Compress & Merge PDF";
  const nav_content = getNavContent(lang);

  if (lang === "ar") {
    text = "ضغط ودمج ملفات PDF";
  } else if (lang === "fr") {
    text = "Compresser et fusionner des fichiers PDF";
  } else if (lang === "es") {
    text = "Comprimir y fusionar archivos PDF";
  } else if (lang === "hi") {
    text = "पीडीएफ को संपीड़ित और मर्ज करें";
  } else if (lang === "zh") {
    text = "压缩和合并PDF文件";
  }
  return (
    <footer className="text-lg-start py-3 outline-1" id="footer">
      <Container>
        <Row className="mb-5 mb-3">
          <Col>
            <h4>{nav_content.convert_to_pdf}</h4>
            <ul className="list-unstyled list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }jpg-to-pdf
                  `}
                  className="list-group-item list-group-item-action border-0 px-2 py-2"
                >
                  {nav_content.jpg_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }word-to-pdf
                  `}
                  className="list-group-item list-group-item-action border-0 px-2 py-2"
                >
                  {nav_content.word_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }powerpoint-to-pdf
                  `}
                  className="list-group-item list-group-item-action border-0 px-2 py-2"
                >
                  {nav_content.powerpoint_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }excel-to-pdf
                  `}
                  className="list-group-item list-group-item-action border-0 px-2 py-2"
                >
                  {nav_content.excel_to_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }html-to-pdf
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.html_to_pdf}
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>{nav_content.convert_from_pdf}</h4>
            <ul className="list-unstyled list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-jpg
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_jpg}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-word
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_word}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-powerpoint
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_powerpoint}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-excel
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_excel}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-pdf-a
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_pdf_a}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }pdf-to-text
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.pdf_to_text}
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-auto text-center">
            <h4>{text}</h4>
            <ul className="list-unstyled list-group">
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }compress-pdf
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.compress_pdf}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.pdfequips.com/${
                    lang == "" ? "" : lang + "/"
                  }merge-pdf
                  `}
                  className="list-group-item list-group-item-action  border-0 px-2 py-2"
                >
                  {nav_content.merge_pdf}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="border-top py-4">
          {/* <Col>
          </Col> */}
          <Col
            className="copyright-row row align-items-center flex-nowrap mb-xs-3"
            md={6}
          >
            {/* <ul className="lang-dropdown list-unstyled m-0"> */}
            <nav className="navbar lang-dropdown m-0 no-shadow">
              <LanguageDropdown id="custom-lang-dropdown" />
            </nav>
            {/* </ul> */}
            <p className="copyright-text col text-muted mb-0 py-0">
              {footer.brand} &copy; {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={6}>
            <ul className="terms-row list-unstyled mb-0 d-flex justify-content-end">
              {/* <li className="mx-3">
                <a href="#" className="text-muted">
                  {footer.terms} &amp; {footer.conditions}
                </a>
              </li> */}
              <li className="mx-3">
                <a href="/privacy-policy" className="text-muted">
                  {footer.privacy_policy}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
