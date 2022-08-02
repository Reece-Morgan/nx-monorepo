import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { BasicHeader } from '@allus-interactive/component-library';
import colourValues from '../settings/colours';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reece Morgan | Portfolio</title>
      </Head>
      <BasicHeader
        bgColour={colourValues.background}
        titleColour={colourValues.title}
        title="Reece Morgan | Portfolio"
      />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
