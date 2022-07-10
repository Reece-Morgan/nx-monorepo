import styled from 'styled-components';
import ColourValues from '../settings/colours';
import { Header } from '@allus-interactive/component-library';

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
          bgColour={ColourValues.background}
          titleColour={ColourValues.title}
          hoverColour={ColourValues.white}
          links={linkData}
          mobileImageUrl='/images/allus-logo.png'
          desktopImageUrl='/images/allus-banner.png'
        />
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome allus-interactive 👋
            </h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
