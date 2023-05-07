import { Container, Row, Col, Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center">
            <h1 className="hero-title display-4 text-white">
              The Complete PDF Solution
            </h1>
            <p className="hero-description lead text-white">
              <span style={{ display: "none" }}>
                Get everything you need to work with PDFs, all in one place.
              </span>
              Take Your PDF Workflows to the Next Level - PDFEquips Provides
              Every Tool You Need, All in One Place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  DocumentDuplicateIcon,
  DocumentAddIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  DocumentIcon,
  DesktopComputerIcon,
  SparklesIcon,
  ScissorsIcon,
} from "@heroicons/react/outline";
import CompressIcon from "./icons/compressIcon";
import Link from "next/link";
// import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <DocumentDuplicateIcon
          className="h-6 w-6"
          style={{
            color: "var(--red)",
          }}
        />
      ),
      title: "Merge PDF",
      description: "Combine multiple PDF files into one document",
    },
    {
      icon: (
        <ScissorsIcon
          className="h-6 w-6"
          style={{
            color: "var(--orange)",
          }}
        />
      ),
      title: "Split PDF",
      description: "Divide one PDF file into multiple documents",
    },
    {
      icon: (
        <CompressIcon
          className="h-6 w-6"
          style={{
            fill: "var(--green)",
          }}
        />
      ),
      title: "Compress PDF",
      description: "Reduce the file size of a PDF while maintaining quality",
    },
    {
      icon: (
        <PresentationChartBarIcon
          className="h-6 w-6"
          style={{
            color: "#C13B1B",
          }}
        />
      ),
      title: "PDF to Powerpoint",
      description: "Convert PDF files to editable Powerpoint presentations",
    },
  ];

  return (
    <section className="features-section py-5">
      <div className="container">
        <Row>
          {features.map((feature, index) => (
            <Col md={3} sm={6} key={index} className="column">
              <Link
                href={`/${feature.title.toLowerCase().replace(/\s/g, "-")}`}
                className="text-decoration-none text-dark"
              >
                <Card className="feature-card border-0">
                  <div className="feature-icon position-relative">
                    {feature.icon}
                    <div className="feature-icon-overlay"></div>
                  </div>
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

// export default HeroSection;

const LandingPage = () => {
  return (
    <section className="landing-page">
      <HeroSection />

      {/* Features section */}
      {/* <section className="features">
        <Container>
          <h2>Features</h2>
          <Row>
            <Col md={4}>
              <div className="feature">
                <img src="feature-icon.png" alt="Feature Icon" />
                <h3>Feature 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <img src="feature-icon.png" alt="Feature Icon" />
                <h3>Feature 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <img src="feature-icon.png" alt="Feature Icon" />
                <h3>Feature 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <FeaturesSection />
    </section>
  );
};

export default LandingPage;
