// this is my index.tsx file with the modified website schema
import Head from "next/head";
import LandingPage from "../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../components/Footer";
import { footer, landing_page, tool } from "../src/content/content";

const Home = ({ lang }: { lang: string }) => {
  const allToolTitles = Object.values(tool).map((t) => t.title);
  const allTitlesCombined = allToolTitles.join(". ");

  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "PDFEquips",
    url: "https://www.pdfequips.com",
    description: `Enhance Your Productivity with our Comprehensive PDF Solution. ${allTitlesCombined}. Easy, Fast, and Secure Editing Online.`,
    sameAs: [
      "https://www.facebook.com/PDFEquips",
      "https://twitter.com/PDFEquips",
      "https://www.linkedin.com/company/pdfequips",
    ],
  };
  return (
    <>
      <Head>
        <title>PDFEquips - Your Source for Quality PDF Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover the Complete PDF Solution: Powerful Tools for Easy Document Management. JPG to PDF, WORD to PDF, POWERPOINT to PDF, EXCEL to PDF, HTML to PDF"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="PDF tools, Convert to PDF, JPG to PDF, WORD to PDF, POWERPOINT to PDF, EXCEL to PDF, HTML to PDF, Convert from PDF, PDF to JPG, PDF to WORD, PDF to POWERPOINT, PDF to EXCEL, PDF to PDF/A, PDF to text, Merge PDF, Compress PDF."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <meta httpEquiv="Content-Language" content="en" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <NavBar path="" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </>
  );
};

export default Home;
