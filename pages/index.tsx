import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import { footer, landing_page, tool } from "../src/content/content";

const Home = ({ lang }: { lang: string }) => {
  return (
    <div>
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
        <meta httpEquiv="Content-Language" content="en" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* <main className={styles.main}>
      </main> */}
      <NavBar lang={lang} />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </div>
  );
};

export default Home;
