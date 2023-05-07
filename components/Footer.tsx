import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-light py-3 position-absolute bottom-0 w-100 outline-1"
      style={{
        top: `100%`,
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-muted mb-0">
              PDFEquips &copy; {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled mb-0 d-flex justify-content-end">
              <li className="mx-3">
                <a href="#" className="text-muted">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-muted">
                  Privacy Policy
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
