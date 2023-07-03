import styled from 'styled-components';
import colourValues from '../settings/colours';
import { Footer, StickyNav } from '@allus-interactive/component-library';
import { stickyNavData, socialMediaData } from '../data';
import { About, Journey, Projects, Welcome } from '../page-sections';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Anchor = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -50px;
`;

const HomePage = () => {
  return(
    <PageWrapper>
      <Welcome />
      <StickyNav 
        bgColour={colourValues.navigation}
        linkColour={colourValues.white}
        hoverColour={colourValues.hover}
        links={stickyNavData}
      />
      <Anchor id='about' />
      <About />
      <Projects />
      <Journey />
      <Footer
        bgColour={colourValues.primary}
        textColour={colourValues.white}
        hoverColour={colourValues.hover}
        hasLinks={false}
        copyrightText='&copy; Reece Morgan 2023'
        socialMediaLinks={socialMediaData}
      />
    </PageWrapper>
  )
}

export default HomePage;
