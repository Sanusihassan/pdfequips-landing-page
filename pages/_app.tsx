import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
// import "pdfequips-navbar/scss/_navbar.scss";
import "../index.scss";
// redux store
import { Provider as ReduxProvider } from "react-redux";
// @ts-ignore
import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../src/store";

// zustand store
import { createStore } from "zustand";
interface FileStore {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const useFileStore = createStore<FileStore>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));

const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});

function MyApp({ Component, pageProps, lang }: AppProps & { lang: string }) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-NY5F91MF0B`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-NY5F91MF0B');
    `,
          }}
        ></script>
      </Head>
      <ReduxProvider store={store}>
        <Component useFileStore={useFileStore} {...pageProps} lang={lang} />
      </ReduxProvider>
    </>
  );
}
MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<{
  pageProps: Record<string, unknown>;
  lang: string;
}> => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  const path = ctx.asPath || "";
  const lang = path.split("/")[1] || ""; // default to English if language code cannot be extracted

  return { pageProps, lang };
};

export default MyApp;
