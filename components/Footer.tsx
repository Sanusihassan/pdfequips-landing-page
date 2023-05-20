/**
 * this is still not working, footer.tsx
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import type { footer } from "../content";

const Footer = ({ footer }: { footer: footer }) => {
  return (
    <footer className="bg-light text-lg-start py-3 outline-1">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-muted mb-0">
              {footer.brand} &copy; {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled mb-0 d-flex justify-content-end">
              <li className="mx-3">
                <a href="#" className="text-muted">
                  {footer.terms} &amp; {footer.conditions}
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-muted">
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
