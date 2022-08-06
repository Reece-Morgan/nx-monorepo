import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { Footer, StickyNav } from '@allus-interactive/component-library';
import { stickyNavData, socialMediaData } from '../data';
import { About, Journey, Projects, Welcome } from '../page-sections';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
`;

const InnerWrapper = styled(Wrapper)``;

const Section = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Experience = styled(Section)`
  background-color: ${colourValues.secondary};
  color: ${colourValues.white};
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: 'Kanit', 'Verdana', sans-serif;
  @media (min-width: ${breakpointValues.tablet}) {
    font-size: 3vw;
  }
`;

const Anchor = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
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
      <Experience>
        <InnerWrapper>
          <Title>My Journey</Title>
        </InnerWrapper>
      </Experience>
      <Footer
        bgColour={colourValues.primary}
        textColour={colourValues.white}
        hoverColour={colourValues.hover}
        hasLinks={false}
        copyrightText='&copy; Reece Morgan 2022'
        socialMediaLinks={socialMediaData}
      />
    </PageWrapper>
  )
}

export default HomePage;
