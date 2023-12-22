// this component looks really messy how can i refactore it?
import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  ScissorsIcon,
  DocumentTextIcon,
  TableIcon,
  DocumentIcon,
  PhotographIcon,
  CodeIcon,
  LockOpenIcon,
  RefreshIcon,
  DocumentAddIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import CompressIcon from "../icons/compressIcon";
import type { tool } from "../../content";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setPath } from "../../src/store";
import { LockClosedIcon } from "@heroicons/react/solid";
import StampIcon from "../icons/StampIcon";
import OcrIcon from "./OcrIcon";
import NumbersIcon from "pdfequips-navbar/icons/Numbers";

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
    {
      title: tool.Split_PDF.title,
      description: tool.Split_PDF.description,
      to: `${langPath}${tool.Split_PDF.to}`,
      color: tool.Split_PDF.color as string,
      icon: ScissorsIcon,
    },
    {
      title: tool.Compress_PDF.title,
      description: tool.Compress_PDF.description,
      to: `${langPath}${tool.Compress_PDF.to}`,
      color: tool.Compress_PDF.color as string,
      icon: CompressIcon,
    },
    {
      title: tool.PDF_to_WORD.title,
      description: tool.PDF_to_WORD.description,
      to: `${langPath}${tool.PDF_to_WORD.to}`,
      color: tool.PDF_to_WORD.color as string,
      icon: DocumentIcon,
    },
    {
      title: tool.PDF_to_Text.title,
      description: tool.PDF_to_Text.description,
      to: `${langPath}${tool.PDF_to_Text.to}`,
      color: tool.PDF_to_Text.color as string,
      icon: DocumentTextIcon,
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
      title: tool.Add_Watermark.title,
      description: tool.Add_Watermark.description as string,
      to: `${langPath}${tool.Add_Watermark.to}`,
      color: tool.Add_Watermark.color as string,
      icon: StampIcon,
    },
    {
      title: tool.Rotate_PDF.title,
      description: tool.Rotate_PDF.description as string,
      to: `${langPath}${tool.Rotate_PDF.to}`,
      color: tool.Rotate_PDF.color as string,
      icon: RefreshIcon,
    },
    {
      title: tool.PDF_to_JPG.title,
      description: tool.PDF_to_JPG.description as string,
      to: `${langPath}${tool.PDF_to_JPG.to}`,
      color: tool.PDF_to_JPG.color as string,
      icon: PhotographIcon,
    },
    {
      title: tool.JPG_to_PDF.title,
      description: tool.JPG_to_PDF.description as string,
      to: `${langPath}${tool.JPG_to_PDF.to}`,
      color: tool.JPG_to_PDF.color as string,
      icon: PhotographIcon,
    },
    {
      title: tool.Lock_PDF.title,
      description: tool.Lock_PDF.description as string,
      to: `${langPath}${tool.Lock_PDF.to}`,
      color: tool.Lock_PDF.color as string,
      icon: LockClosedIcon,
    },
    {
      title: tool.Unlock_PDF.title,
      description: tool.Unlock_PDF.description as string,
      to: `${langPath}${tool.Unlock_PDF.to}`,
      color: tool.Unlock_PDF.color as string,
      icon: LockOpenIcon,
    },
    {
      title: tool.HTML_to_PDF.title,
      description: tool.HTML_to_PDF.description as string,
      to: `${langPath}${tool.HTML_to_PDF.to}`,
      color: tool.HTML_to_PDF.color as string,
      icon: CodeIcon,
    },
    {
      title: tool.Number_PDF.title,
      description: tool.Number_PDF.description as string,
      to: `${langPath}${tool.Number_PDF.to}`,
      color: tool.Number_PDF.color as string,
      icon: NumbersIcon,
    },
    {
      title: tool.Ocr_PDF.title,
      description: tool.Ocr_PDF.description as string,
      to: `${langPath}${tool.Ocr_PDF.to}`,
      color: tool.Ocr_PDF.color as string,
      icon: OcrIcon,
    },
    {
      title: tool.PDF_to_PDF_A.title,
      description: tool.PDF_to_PDF_A.description as string,
      to: `${langPath}${tool.PDF_to_PDF_A.to}`,
      color: tool.PDF_to_PDF_A.color as string,
      icon: DocumentAddIcon,
    },
    {
      title: tool.Web_to_PDF.title,
      description: tool.Web_to_PDF.description as string,
      to: `${langPath}${tool.Web_to_PDF.to}`,
      color: tool.Web_to_PDF.color as string,
      icon: GlobeIcon,
    },
  ];

  return (
    <section className="features-section py-5">
      <Container>
        <h2 className="display-4 text-center">{title}</h2>{" "}
        <p className="lead text-center">{description}</p>
        <div className="features">
          {featureCards.map((card, index) => (
            <div key={index} className="feature">
              <div className={`text-decoration-none text-dark ${card.to}`}>
                <a
                  href={
                    // "https://3000-sanusihassan-pdfequips-x5kvhyduops.ws-eu107.gitpod.io/" +
                    card.to
                  }
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
                            [card.icon === CompressIcon ||
                            card.icon === StampIcon ||
                            card.icon === OcrIcon ||
                            card.icon === NumbersIcon
                              ? "fill"
                              : "color"]: card.color,
                          }}
                        />
                      }
                      {/* {card.icon === OcrIcon ? (
                        <div className="ai p-1">
                          <h6>
                            <span className="badge col bg-danger text-white">
                              AI
                            </span>
                          </h6>
                        </div>
                      ) : null} */}
                      {/* <div className="feature-icon-overlay"></div> */}
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
