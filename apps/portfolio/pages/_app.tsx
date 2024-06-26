import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reece Morgan | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Front End Developer Portfolio for Reece Morgan."></meta>
        {/* Google tag (gtag.js) */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EJJLT07GW"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1EJJLT07GW');
          `,
        }} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
