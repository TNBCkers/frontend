import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Auth from "../contexts/AuthContext";
import { ViewProvider } from "../contexts/ViewContext";
import Nav from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewProvider>
      <Auth>
        <Nav></Nav>
        <Component {...pageProps} />
      </Auth>
    </ViewProvider>
  );
}

export default MyApp;
