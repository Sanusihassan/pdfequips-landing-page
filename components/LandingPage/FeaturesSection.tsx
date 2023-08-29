import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Link from "next/link";
import {
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  // ScissorsIcon,
  DocumentTextIcon,
  TableIcon,
  DocumentIcon,
  PhotographIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import CompressIcon from "../icons/compressIcon";
import type { tool } from "../../content";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setPath } from "../../src/store";

export const FeaturesSection = ({
  tool,
  lang,
  title,
  description,
}: {
  tool: tool;
  lang: string;
  title: string;
  description: string;
}) => {
  let langPath = lang ? `/${lang}` : "";
  const languages = ["ar", "fr", "zh", "hi", "es"];
  const regex = new RegExp(`\\/(${languages.join("|")})|\\/+`, "g");
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  const dispatch = useDispatch();
  const featureCards = [
    {
      title: tool.Merge_PDF.title,
      description: tool.Merge_PDF.description,
      to: `${langPath}${tool.Merge_PDF.to}`,
      color: tool.Merge_PDF.color as string,
      icon: DocumentDuplicateIcon,
    },
    // {
    //   title: tool.Split_PDF.title,
    //   description: tool.Split_PDF.description,
    //   to: `${langPath}${tool.Split_PDF.to}`,
    //   color: tool.Split_PDF.color as string,
    //   icon: ScissorsIcon,
    // },
    {
      title: tool.PDF_to_Text.title,
      description: tool.PDF_to_Text.description,
      to: `${langPath}${tool.PDF_to_Text.to}`,
      color: tool.PDF_to_Text.color as string,
      icon: DocumentTextIcon,
    },
    {
      title: tool.Compress_PDF.title,
      description: tool.Compress_PDF.description,
      to: `${langPath}${tool.Compress_PDF.to}`,
      color: tool.Compress_PDF.color as string,
      icon: CompressIcon,
    },
    {
      title: tool.PDF_to_Powerpoint.title,
      description: tool.PDF_to_Powerpoint.description as string,
      to: `${langPath}${tool.PDF_to_Powerpoint.to}`,
      color: tool.PDF_to_Powerpoint.color as string,
      icon: PresentationChartBarIcon,
    },
    {
      title: tool.PDF_to_EXCEL.title,
      description: tool.PDF_to_EXCEL.description as string,
      to: `${langPath}${tool.PDF_to_EXCEL.to}`,
      color: tool.PDF_to_EXCEL.color as string,
      icon: TableIcon,
    },
    {
      title: tool.WORD_to_PDF.title,
      description: tool.WORD_to_PDF.description as string,
      to: `${langPath}${tool.WORD_to_PDF.to}`,
      color: tool.WORD_to_PDF.color as string,
      icon: DocumentIcon,
    },
    {
      title: tool.POWERPOINT_to_PDF.title,
      description: tool.POWERPOINT_to_PDF.description as string,
      to: `${langPath}${tool.POWERPOINT_to_PDF.to}`,
      color: tool.POWERPOINT_to_PDF.color as string,
      icon: PresentationChartBarIcon,
    },
    {
      title: tool.JPG_to_PDF.title,
      description: tool.JPG_to_PDF.description as string,
      to: `${langPath}${tool.JPG_to_PDF.to}`,
      color: tool.JPG_to_PDF.color as string,
      icon: PhotographIcon,
    },
    {
      title: tool.HTML_to_PDF.title,
      description: tool.HTML_to_PDF.description as string,
      to: `${langPath}${tool.HTML_to_PDF.to}`,
      color: tool.HTML_to_PDF.color as string,
      icon: CodeIcon,
    },
  ];

  return (
    <section className="features-section py-5">
      <Container>
        <h2 className="display-4 text-center">{title}</h2>{" "}
        <p className="lead text-center">{description}</p>
        <Row>
          {featureCards.map((card, index) => (
            <Col key={index} md={3} sm={6} className="column">
              <div className={`text-decoration-none text-dark ${card.to}`}>
                <a
                  href={card.to}
                  className="text-decoration-none text-muted text-reset"
                  onClick={() => {
                    return dispatch(setPath(path));
                  }}
                >
                  <Card
                    className={`feature-card border-0 ${card.to.replace(
                      regex,
                      ""
                    )}`}
                  >
                    <div className="feature-icon position-relative">
                      {
                        <card.icon
                          className="h-6 w-6"
                          style={{
                            [card.icon === CompressIcon ? "fill" : "color"]:
                              card.color,
                          }}
                        />
                      }
                      <div className="feature-icon-overlay"></div>
                    </div>
                    <Card.Body>
                      <h3 className="card-title h5">
                        <bdi>{card.title}</bdi>
                      </h3>
                      <Card.Text>
                        <bdi>{card.description}</bdi>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
