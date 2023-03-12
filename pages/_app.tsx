import "@/styles/globals.css";
import "@/styles/app.scss";
import "@/styles/base.scss";

import type { AppProps } from "next/app";

// State management Setup
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
