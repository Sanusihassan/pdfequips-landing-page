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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="संपूर्ण पीडीएफ समाधान खोजें: दस्तावेज़ों को आसानी से प्रबंधित करने के लिए शक्तिशाली उपकरण। जेपीजी से पीडीएफ, वर्ड से पीडीएफ, पावरपॉइंट से पीडीएफ, एक्सेल से पीडीएफ, एचटीएमएल से पीडीएफ"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="पीडीएफ उपकरण, पीडीएफ में कनवर्ट करें, जेपीजी से पीडीएफ, वर्ड से पीडीएफ, पावरपॉइंट से पीडीएफ, एक्सेल से पीडीएफ, एचटीएमएल से पीडीएफ, पीडीएफ से कनवर्ट करें, पीडीएफ से जेपीजी, पीडीएफ से वर्ड, पीडीएफ से पावरपॉइंट, पीडीएफ से एक्सेल, पीडीएफ से पीडीएफ/ए, पीडीएफ से टेक्स्ट, पीडीएफ को मर्ज करें, पीडीएफ को कंप्रेस करें।"
        />
        <meta http-equiv="Content-Language" content="hi" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NavBar nav_content={nav_content} lang={lang} />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} nav_content={nav_content} />
    </div>
  );
};

export default Home;
