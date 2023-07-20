import type { AppContext, AppProps } from "next/app";

import "../index.scss";
// @ts-ignore

import { ToolStoreContext } from "../src/ToolStoreContext";


import { Provider } from "react-redux";
// @ts-ignore
import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../src/store";

const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});


function MyApp({ Component, pageProps, lang }: AppProps & { lang: string }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} lang={lang} />
    </Provider>
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
