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
        <title>
          पीडीएफइक्विप्स - गुणवत्तापूर्ण पीडीएफ टूल्स के लिए आपका स्रोत
        </title>
        <meta
          name="description"
          content="संपूर्ण पीडीएफ समाधान खोजें: दस्तावेज़ों को आसानी से प्रबंधित करने के लिए शक्तिशाली उपकरण।"
        />
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
