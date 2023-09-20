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
import { FeaturesSection } from "./LandingPage/FeaturesSection";
import { WhyChooseUs } from "./LandingPage/WhyChooseUS";


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
    </section>
  );
};

export default LandingPage;
