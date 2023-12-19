import Head from "next/head";
// import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import NavBar from "pdfequips-navbar/NavBar";
import Footer from "../../components/Footer";
import { footer, landing_page, tool } from "../../src/content/content-es";

const Home = ({ lang }: { lang: string }) => {
  return (
    <div>
      <Head>
        <title>PDFEquips: su fuente de herramientas PDF de calidad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Descubra la solución PDF completa: potentes herramientas para gestionar documentos con facilidad. JPG a PDF, WORD a PDF, POWERPOINT a PDF, EXCEL a PDF, HTML a PDF"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="keywords"
          content="Herramientas de PDF, Convertir a PDF, JPG a PDF, WORD a PDF, POWERPOINT a PDF, EXCEL a PDF, HTML a PDF, Convertir de PDF, PDF a JPG, PDF a WORD, PDF a POWERPOINT, PDF a EXCEL, PDF a PDF/A, PDF a texto, Combinar PDF, Comprimir PDF"
        />
        <meta http-equiv="Content-Language" content="es" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7391414384206267"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NavBar path="" />
      <LandingPage landing_page={landing_page} tool={tool} lang={lang} />
      <Footer footer={footer} lang={lang} />
    </div>
  );
};

export default Home;
