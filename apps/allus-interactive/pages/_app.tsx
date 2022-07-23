import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header, Footer } from '@allus-interactive/component-library'
import colourValues from '../settings/colours'

function CustomApp({ Component, pageProps }: AppProps) {
  const linkData = [
    { url: '/games/rpgs', text: 'RPGs' },
    { url: '/games/platformers', text: 'Platformers' },
    { url: '/games/demos-and-prototypes', text: 'Demos/Prototype' },
    { url: '/games/ongoing-projects', text: 'Ongoing Projects' },
  ];

  return (
    <>
      <Head>
        <title>Allus Interactive</title>
        <link rel="icon" href="/favicon.png" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146785635-2"></script>
        <script dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-146785635-2');`,
          }}
        />
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
        hoverColour={colourValues.title}
      />
    </>
  );
}

export default CustomApp;
