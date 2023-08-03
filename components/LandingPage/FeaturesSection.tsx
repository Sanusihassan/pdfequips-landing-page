import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Link from "next/link";
import {
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  // ScissorsIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import CompressIcon from "../icons/compressIcon";
import type { tool } from "../../content";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setPath } from "../../src/store";

export const FeaturesSection = ({
  tool,
  lang,
}: {
  tool: tool;
  lang: string;
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
  ];

  return (
    <section className="features-section py-5">
      <Container>
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
                      <Card.Title>
                        <bdi>{card.title}</bdi>
                      </Card.Title>
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
