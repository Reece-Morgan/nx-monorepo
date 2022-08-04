import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reece Morgan | Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
