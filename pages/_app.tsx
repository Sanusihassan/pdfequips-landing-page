import type { AppProps } from "next/app";
import "../index.scss";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../src/store";

const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
