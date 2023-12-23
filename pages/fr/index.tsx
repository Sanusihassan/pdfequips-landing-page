// this is my updated code
import Head from "next/head";
import LandingPage from "../../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../../components/Footer";
import { footer, landing_page, tool } from "../../src/content/content-fr";

const Home = ({ lang }: { lang: string }) => {
  const allToolTitles = Object.values(tool).map((t) => t.title);
  const allTitlesCombined = allToolTitles.join(". ");

  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "PDFEquips",
    url: "https://www.pdfequips.com/fr",
    description: `Découvrez la solution PDF complète : ${allTitlesCombined}. Des outils puissants pour la gestion simplifiée de documents.`,
    sameAs: [
      "https://www.facebook.com/PDFEquips",
      "https://twitter.com/PDFEquips",
      "https://www.linkedin.com/company/pdfequips",
    ],
  };
  return (
    <>
      <Head>
        <title>PDFEquips - Votre source d'outils PDF de qualité</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Découvrez la solution PDF complète : des outils puissants pour gérer les documents en toute simplicité. JPG en PDF, WORD en PDF, POWERPOINT en PDF, EXCEL en PDF, HTML en PDF"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="Outils PDF, Convertir en PDF, JPG en PDF, WORD en PDF, POWERPOINT en PDF, EXCEL en PDF, HTML en PDF, Convertir de PDF, PDF en JPG, PDF en WORD, PDF en POWERPOINT, PDF en EXCEL, PDF en PDF/A, PDF en texte, fusionner PDF, compresser PDF."
        />
        <meta httpEquiv="Content-Language" content="fr" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NavBar path="" lang="fr" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </>
  );
};

export default Home;
