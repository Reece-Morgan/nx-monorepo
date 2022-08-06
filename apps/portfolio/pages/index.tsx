import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { Footer, StickyNav } from '@allus-interactive/component-library';
import { stickyNavData, socialMediaData } from '../data';

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

const WelcomeWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const InnerWrapper = styled(Wrapper)``;

const Section = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Welcome = styled(Section)`
  background-color: ${colourValues.primary};
  color: ${colourValues.white};
  min-height: auto;
  height: 100vh;
`;

const About = styled(Section)`
  background-color: ${colourValues.secondary};
  color: ${colourValues.white};
`;

const Projects = styled(Section)`
  background-color: ${colourValues.primary};
  color: ${colourValues.white};
`;

const Experience = styled(Section)`
  background-color: ${colourValues.secondary};
  color: ${colourValues.white};
`;

const WelcomeMessage = styled.h1`
  font-size: 10vw;
  margin: 0;
  font-family: 'Kanit', 'Verdana', sans-serif;
`;

const WelcomeSubMessage = styled(WelcomeMessage)`
  font-size: 7.5vw;
`;

const Bold = styled.span`
  font-weight: 800;
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: 'Kanit', 'Verdana', sans-serif;
  @media (min-width: ${breakpointValues.tablet}) {
    font-size: 3vw;
  }
`;

const Subtitle = styled.h3`
  font-size: 1em;
  font-family: 'Kanit', 'Verdana', sans-serif;
  @media (min-width: ${breakpointValues.tablet}) {
    font-size: 2vw;
  }
`;

const Anchor = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
`;

const TopAnchor = styled(Anchor)`
  bottom: -50px;
`;

const HomePage = () => {
  return(
    <PageWrapper>
      <Welcome id='welcome'>
        <WelcomeWrapper>
          <WelcomeMessage>Hi, I&#39;m <Bold>Reece</Bold>.</WelcomeMessage>
          <WelcomeSubMessage>I&#39;m a <Bold>Front End<br/>Developer</Bold>.</WelcomeSubMessage>
        </WelcomeWrapper>
      </Welcome>
      <StickyNav 
        bgColour={colourValues.navigation}
        linkColour={colourValues.white}
        hoverColour={colourValues.hover}
        links={stickyNavData}
      />
      <TopAnchor id='about' />
      <About>
        <InnerWrapper>
          <Title>About Me</Title>
          <p>
            I am a Front End Developer based in Moray, Scotland. I enjoy designing websites and building them with React and TypeScript.
          </p>
          <p>
            I started out my journey as a Front End Developer building basic hobby sites using plain HTML, CSS and Javascript. I made the 
            jump to using Angular in late 2018/early 2019. I spent a few years working with this framework, before moving on to React and 
            Typescript. I have been developing my React skills and building sites with NextJS and Typescript since the summer of 2021.
          </p>
          <p>
            I am passionate about writing clean, efficient code and I&#39;m also very interested in exploring new technologies.
          </p>
          <Subtitle>Experience</Subtitle>
          <p>
            I have 4+ years working as a professional developer/engineer, and a further 4+ years prior to this as a hobbyist/student. Below 
            is a breakdown of how long I have been working with different languages and frameworks, in both a personal and professional capacity.
          </p>
          <ul>
            <li>HTML, CSS and JS - 8+ years</li>
            <li>Angular - 3+ years</li>
            <li>React/NextJS - 1+ years</li>
          </ul>
        </InnerWrapper>
        <Anchor id='projects' />
      </About>
      <Projects>
        <InnerWrapper>
          <Title>My Projects</Title>
        </InnerWrapper>
        <Anchor id='journey' />
      </Projects>
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
