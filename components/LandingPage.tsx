const HeroSection = ({
  landing_page,
}: {
  landing_page: {
    hero: {
      title: string;
      description: string;
    };
  };
}) => {
  return (
    <section className="hero-section bg-gradient">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center">
            <h1 className="hero-title display-4 text-white">
              <bdi>{landing_page.hero.title}</bdi>
            </h1>
            <p className="hero-description lead text-white">
              <span style={{ display: "none" }}>
                Get everything you need to work with PDFs, all in one place.
              </span>
              <bdi>{landing_page.hero.description}</bdi>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import type { tool } from "../content";
// import { useTranslation } from "react-i18next";

import { FeaturesSection } from "./LandingPage/FeaturesSection";
// import { Link } from "react-router-dom";

// export default HeroSection;

const LandingPage = ({
  landing_page,
  tool,
  lang,
}: {
  landing_page: {
    hero: {
      title: string;
      description: string;
    };
  };
  tool: tool;
  lang: string;
}) => {
  return (
    <section className="landing-page">
      <HeroSection landing_page={landing_page} />
      <FeaturesSection tool={tool} lang={lang} />
    </section>
  );
};

export default LandingPage;
