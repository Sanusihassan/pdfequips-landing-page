import Head from "next/head";
import NavBar from "../components/NavBar";
import Tool from "../components/Tool";
import { useRouter } from "next/router";
import {
  edit_page,
  errors,
  nav_content,
  tool,
  tools,
  web2pdftool,
  downloadFile,
  translate_pdf,
} from "../src/content/content";

type data_type = {
  title: string;
  description: string;
  color: string;
  type: string;
};

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export default ({ item }: { item: data_type }) => {
  const router = useRouter();
  let path = router.asPath;
  // translate this to hindi
  let appology_message = {
    title: "Sorry, This feature is not implemented yet.",
    reason: `We apologize for the inconvenience. This feature is currently under
    development and will be available in a future update. Thank you for
    your understanding.`,
  };

  return (
    <>
      <Head>
        <title>PDFEquips | {item.title}</title>
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
        {/* needed for styles */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <NavBar nav_content={nav_content} lang="" />
      <Tool
        tools={tools}
        data={item}
        lang=""
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        web2pdftool={web2pdftool}
        downloadFile={downloadFile}
        translate_pdf={translate_pdf}
      />
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/merge-pdf": { item: tool["Merge_PDF"] },
  "/translate-pdf": { item: tool["Translate_PDF"] },
  "/compress-pdf": { item: tool["Compress_PDF"] },
  "/pdf-to-powerpoint": { item: tool["PDF_to_Powerpoint"] },
  "/jpg-to-pdf": { item: tool["JPG_to_PDF"] },
  "/word-to-pdf": { item: tool["WORD_to_PDF"] },
  "/powerpoint-to-pdf": { item: tool["POWERPOINT_to_PDF"] },
  "/excel-to-pdf": { item: tool["EXCEL_to_PDF"] },
  "/html-to-pdf": { item: tool["HTML_to_PDF"] },
  "/pdf-to-jpg": { item: tool["PDF_to_JPG"] },
  "/pdf-to-word": { item: tool["PDF_to_WORD"] },
  "/pdf-to-excel": { item: tool["PDF_to_EXCEL"] },
  "/pdf-to-pdf-a": { item: tool["PDF_to_PDF_A"] },
  "/web-to-pdf": { item: tool["Web_to_PDF"] },
  "/pdf-to-text": { item: tool["PDF_to_Text"] },
  "/markdown-to-pdf": { item: tool["Markdown_to_PDF"] },
  "/pdf-to-html": { item: tool["PDF_to_HTML"] },
  "/pdf-to-markdown": { item: tool["PDF_to_Markdown"] },
};
