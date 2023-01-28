import Head from "next/head";
import "../styles/App.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GoodCity | Delivery</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
