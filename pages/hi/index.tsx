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
} from "../../src/content/content-hi";

const Home = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Head>
        <title>PDFEquips</title>
        <meta name="description" content="The Complete PDF Solution" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        ></link>
      </Head>

      <NavBar nav_content={nav_content} lang={lang} />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} />
    </div>
  );
};

export default Home;
