import styled from 'styled-components';
import colourValues from '../settings/colours';
import { Header, Footer } from '@allus-interactive/component-library';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const linkData = [
    { url: '/rpgs', text: 'RPGs' },
    { url: '/platformers', text: 'Platformers' },
    { url: '/demos-and-prototypes', text: 'Demos/Prototype' },
  ];

  return (
    <StyledPage>
      <div className="wrapper">
        <Header
          bgColour={colourValues.background}
          titleColour={colourValues.title}
          hoverColour={colourValues.white}
          links={linkData}
          mobileImageUrl="/images/allus-logo.png"
          desktopImageUrl="/images/allus-banner.png"
        />
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome allus-interactive 👋
            </h1>
          </div>
        </div>
        <Footer
          bgColour={colourValues.background}
          textColour={colourValues.white}
        />
      </div>
    </StyledPage>
  );
}

export default Index;
