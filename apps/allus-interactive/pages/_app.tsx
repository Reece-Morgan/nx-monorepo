import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header, Footer } from '@allus-interactive/component-library'
import colourValues from '../settings/colours'

function CustomApp({ Component, pageProps }: AppProps) {
  const linkData = [
    { url: '/rpgs', text: 'RPGs' },
    { url: '/platformers', text: 'Platformers' },
    { url: '/demos-and-prototypes', text: 'Demos/Prototype' },
  ];

  return (
    <>
      <Head>
        <title>Welcome to Allus Interactive</title>
      </Head>
      <Header
        bgColour={colourValues.background}
        titleColour={colourValues.title}
        hoverColour={colourValues.white}
        links={linkData}
        mobileImageUrl="/images/allus-logo.png"
        desktopImageUrl="/images/allus-banner.png"
      />
      <Component {...pageProps} />
      <Footer
        bgColour={colourValues.background}
        textColour={colourValues.white}
      />
    </>
  );
}

export default CustomApp;
