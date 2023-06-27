/**
 * this is my _document.tsx file
 */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { isrtllang } from "../src/utils";

const MyDocument = ({ isRtl, lang }: { isRtl: boolean; lang: string }) => {
  return (
    <Html lang={lang.length > 0 ? lang : "en"} dir={isRtl ? "rtl" : "ltr"}>
      <Head>
        <title>PDFEquips</title>
        <meta name="description" content="The Complete PDF Solution" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FC271C" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdfequips.com/" />
        <meta property="og:title" content="PDFEquips" />
        <meta property="og:description" content="The Complete PDF Solution" />
        <meta property="og:image" content="https://pdfequips.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pdfequips" />
        <meta name="twitter:creator" content="@pdfequips" />
        <meta name="twitter:title" content="PDFEquips" />
        <meta name="twitter:description" content="The Complete PDF Solution" />
        <meta name="twitter:image" content="https://pdfequips.com/logo.png" /> */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  const isRtl = isrtllang(ctx.asPath || "");
  const path = ctx.asPath || "";
  const lang = path.split("/")[1] || "";

  return {
    ...initialProps,
    isRtl,
    lang,
  };
};

export default MyDocument;
