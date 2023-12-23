import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../../components/Footer";
import { footer, landing_page, tool } from "../../src/content/content-zh";

const Home = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Head>
        <title>PDFEquips - 您优质 PDF 工具的来源</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="探索完整的 PDF 解决方案：轻松管理文档的强大工具。JPG 为 PDF、WORD 为 PDF、POWERPOINT 为 PDF、EXCEL 为 PDF、HTML 为 PDF"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="PDF 工具，转换为 PDF、JPG 为 PDF、WORD 为 PDF、POWERPOINT 为 PDF、EXCEL 为 PDF、HTML 为 PDF、从 PDF 转换、PDF 为 JPG、PDF 为 WORD、PDF 为 POWERPOINT、PDF 为 EXCEL、PDF 为 PDF/A、PDF 到文本、合并 PDF、压缩 PDF。"
        />
        <meta httpEquiv="Content-Language" content="zh" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-7391414384206267" />
      </Head>

      <NavBar path="" lang="zh" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </div>
  );
};

export default Home;
