import "../styles/globals.css";
import Head from "next/head";

//CHnage the favicon icon
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sebastian Mora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
