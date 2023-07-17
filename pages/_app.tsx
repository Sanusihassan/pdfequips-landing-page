import type { AppContext, AppProps } from "next/app";

import "../index.scss";
// @ts-ignore
import { Provider } from "mobx-react-lite";
import { ToolStoreContext } from "../src/ToolStoreContext";

// import { ToolStore } from '../stores/ToolStore';

import { ToolStore } from "../src/store";

function MyApp({ Component, pageProps, lang }: AppProps & { lang: string }) {
  const toolStore = new ToolStore();
  return (
    <ToolStoreContext.Provider value={toolStore}>
      <Component {...pageProps} lang={lang} />
    </ToolStoreContext.Provider>
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
