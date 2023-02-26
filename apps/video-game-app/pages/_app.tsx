import { SimpleHeader } from '@allus-interactive/component-library';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Video Game Tracker</title>
      </Head>
      <main className="app">
        <SimpleHeader bgColour='#000' imageUrl='/logoAlt.png' />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
