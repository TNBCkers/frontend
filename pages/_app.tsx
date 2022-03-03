import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Auth from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;
