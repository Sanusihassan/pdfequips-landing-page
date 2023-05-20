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
