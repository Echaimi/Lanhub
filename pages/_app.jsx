import Head from "next/head";
import "tailwindcss/tailwind.css";
import Router from "next/router";
import "../styles/global.css";
import "../styles/mapbox.css";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#000000",
  className: "z-50",
  delay: 50,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
