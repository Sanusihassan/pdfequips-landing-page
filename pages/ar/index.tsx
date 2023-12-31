import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../../components/Footer";
import { footer, landing_page, tool } from "../../src/content/content-ar";

const Home = ({ lang }: { lang: string }) => {
  const allToolTitles = Object.values(tool).map((t) => t.title);
  const allTitlesCombined = allToolTitles.join(". ");
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "PDFEquips",
    url: "https://www.pdfequips.com/ar",
    description: `اكتشف الحل الكامل لـ PDF: ${allTitlesCombined}. سهولة وسرعة وأمان في التحرير عبر الإنترنت.`,
    sameAs: [
      "https://www.facebook.com/PDFEquips",
      "https://twitter.com/PDFEquips",
      "https://www.linkedin.com/company/pdfequips",
    ],
  };

  return (
    <>
      <Head>
        <title>PDFEquips - مصدرك لأدوات PDF عالية الجودة</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="اكتشف الحل الكامل لل PDF: أدوات قوية لإدارة المستندات بسهولة. التحويل إلى PDF ، JPG إلى PDF ، WORD إلى PDF ، POWERPOINT إلى PDF ، EXCEL إلى PDF ، HTML إلى PDF"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="أدوات PDF ، التحويل إلى PDF ، JPG إلى PDF ، WORD إلى PDF ، POWERPOINT إلى PDF ، EXCEL إلى PDF ، HTML إلى PDF ، التحويل من PDF ، PDF إلى JPG ، PDF إلى WORD ، PDF إلى POWERPOINT ، PDF إلى EXCEL ، PDF إلى PDF / A ، PDF إلى نص ، دمج PDF ، ضغط PDF. "
        />
        <meta httpEquiv="Content-Language" content="ar" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NavBar path="" lang="ar" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </>
  );
};

export default Home;
