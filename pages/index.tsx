import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PDFequips</title>
        <meta name="description" content="The Complete PDF Solution" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        ></link>
      </Head>

      {/* <main className={styles.main}>
      </main> */}
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
