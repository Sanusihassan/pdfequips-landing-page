import { Button, Col, Form, Row } from "react-bootstrap";
import { ToolData } from "./Tool";
import { useState } from "react";
import { web2pdftool } from "../content";



const Web2PDF = ({
    content,
    web2pdftool
}: {
    content: ToolData,
    web2pdftool: web2pdftool
}) => {
    const [pdfUrl, setPdfUrl] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement PDF to text conversion logic
    console.log(`Converting PDF from URL: ${pdfUrl}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPdfUrl(event.target.value);
  };
  return <>
    <h2 className="display-3 text-center">
      <bdi>
        {content.title}
      </bdi>
    </h2>
    <p className="lead text-center">
      <bdi>
        {content.description}
      </bdi>
    </p>
    <div className="container">
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={9} sm={10} md={11} lg={11} className="p-0">
          <Form.Group className="form-group-lg w-100">
            <input
              type="url"
              id="pdfFile"
              className="form-control custom-input"
              placeholder={web2pdftool.placeholder}
              style={{ width: "100%" }}
              value={pdfUrl}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={3} sm={2} md={1} lg={1} className="p-0">
          <Button type="submit">{web2pdftool.submit_btn}</Button>
        </Col>
      </Row>
    </Form>
    </div>
  </>;
};

export default Web2PDF;
