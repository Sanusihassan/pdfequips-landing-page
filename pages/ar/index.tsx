import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  footer,
  landing_page,
  nav_content,
  tool,
} from "../../src/content/content-ar";

const Home = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Head>
        <title>PDFEquips - مصدرك لأدوات PDF عالية الجودة</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="اكتشف الحل الكامل لل PDF: أدوات قوية لإدارة المستندات بسهولة. التحويل إلى PDF ، JPG إلى PDF ، WORD إلى PDF ، POWERPOINT إلى PDF ، EXCEL إلى PDF ، HTML إلى PDF"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="أدوات PDF ، التحويل إلى PDF ، JPG إلى PDF ، WORD إلى PDF ، POWERPOINT إلى PDF ، EXCEL إلى PDF ، HTML إلى PDF ، التحويل من PDF ، PDF إلى JPG ، PDF إلى WORD ، PDF إلى POWERPOINT ، PDF إلى EXCEL ، PDF إلى PDF / A ، PDF إلى نص ، دمج PDF ، ضغط PDF. "
        />
        <meta http-equiv="Content-Language" content="ar" />
      </Head>

      <NavBar nav_content={nav_content} lang={lang} />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} nav_content={nav_content} />
    </div>
  );
};

export default Home;
