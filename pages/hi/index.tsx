// this is my hindi index.tsx file, i want to use the same website schema here but for hindi.
import Head from "next/head";
import LandingPage from "../../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../../components/Footer";
import { footer, landing_page, tool } from "../../src/content/content-hi";

const Home = ({ lang }: { lang: string }) => {
  const allToolTitles = Object.values(tool).map((t) => t.title);
  const allTitlesCombined = allToolTitles.join(". ");

  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "PDFEquips",
    url: "https://www.pdfequips.com/hi",
    description: `संपूर्ण पीडीएफ समाधान खोजें: ${allTitlesCombined}. दस्तावेज़ों को आसानी से प्रबंधित करने के लिए शक्तिशाली उपकरण।`,
    sameAs: [
      "https://www.facebook.com/PDFEquips",
      "https://twitter.com/PDFEquips",
      "https://www.linkedin.com/company/pdfequips",
    ],
  };
  return (
    <>
      <Head>
        <title>
          पीडीएफइक्विप्स - गुणवत्तापूर्ण पीडीएफ टूल्स के लिए आपका स्रोत
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <meta
          name="description"
          content="संपूर्ण पीडीएफ समाधान खोजें: दस्तावेज़ों को आसानी से प्रबंधित करने के लिए शक्तिशाली उपकरण। जेपीजी से पीडीएफ, वर्ड से पीडीएफ, पावरपॉइंट से पीडीएफ, एक्सेल से पीडीएफ, एचटीएमएल से पीडीएफ"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="पीडीएफ उपकरण, पीडीएफ में कनवर्ट करें, जेपीजी से पीडीएफ, वर्ड से पीडीएफ, पावरपॉइंट से पीडीएफ, एक्सेल से पीडीएफ, एचटीएमएल से पीडीएफ, पीडीएफ से कनवर्ट करें, पीडीएफ से जेपीजी, पीडीएफ से वर्ड, पीडीएफ से पावरपॉइंट, पीडीएफ से एक्सेल, पीडीएफ से पीडीएफ/ए, पीडीएफ से टेक्स्ट, पीडीएफ को मर्ज करें, पीडीएफ को कंप्रेस करें।"
        />
        <meta httpEquiv="Content-Language" content="hi" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NavBar path="" lang="hi" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </>
  );
};

export default Home;
