import type { landing_page } from "../content";
const HeroSection = ({ landing_page }: { landing_page: landing_page }) => {
  return (
    <section className="hero-section bg-gradient">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center">
            <h1 className="hero-title display-4 text-white">
              <bdi>{landing_page.hero.title}</bdi>
            </h1>
            <p className="hero-description lead text-white">
              <bdi>{landing_page.hero.description}</bdi>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import type { tool } from "../content";
import { ChangeTo, ContinueIn } from "../src/content/content";
// import { useTranslation } from "react-i18next";

import { FeaturesSection } from "./LandingPage/FeaturesSection";
import { WhyChooseUs } from "./LandingPage/WhyChooseUS";
// import LanguageAlert from "./LanguageAlert";
// import { Link } from "react-router-dom";

// export default HeroSection;

const LandingPage = ({
  landing_page,
  tool,
  lang,
}: {
  landing_page: landing_page;
  tool: tool;
  lang: string;
}) => {
  return (
    <section className="landing-page position-relative">
      <HeroSection landing_page={landing_page} />
      <FeaturesSection
        title={landing_page.features.title}
        description={landing_page.features.description}
        tool={tool}
        lang={lang}
      />
      <WhyChooseUs
        title={landing_page.why_us.title}
        description={landing_page.why_us.description}
      />
      {/* <LanguageAlert
        lang={lang}
        alert={landing_page.alert}
        ContinueIn={ContinueIn}
        ChangeTo={ChangeTo}
      /> */}
    </section>
  );
};

export default LandingPage;
