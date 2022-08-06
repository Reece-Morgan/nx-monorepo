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

  const iconData = [
    { imageUrl: "/images/icons/facebook.svg", altText: "Facebook", url: "https://www.facebook.com/AllusInteractive/" },
    { imageUrl: "/images/icons/instagram.svg", altText: "Instagram", url: "https://www.instagram.com/allusinteractive/" },
    { imageUrl: "/images/icons/twitter.svg", altText: "Twitter", url: "https://twitter.com/AllusGameDev" },
    { imageUrl: "/images/icons/itch-io.svg", altText: "itch.io", url: "https://allusinteractive.itch.io/" },
    { imageUrl: "/images/icons/linkedin.svg", altText: "LinkedIn", url: "https://www.linkedin.com/in/reece-morgan-dev/" },
    { imageUrl: "/images/icons/github.svg", altText: "Github",  url: "https://github.com/AllusInteractive"},
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
        hasLinks={true}
        copyrightText='Copyright Allus Interactive 2017-2022'
        socialMediaLinks={iconData}
      />
    </>
  );
}

export default CustomApp;
