import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { Icon, StickyNav } from '@allus-interactive/component-library'

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

const FooterContainer = styled.footer<{ colour: string }>`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CopyrightText = styled.p<{ colour: string }>`
  color: ${(props) => props.colour};
  font-size: 1em;
  margin: 0;
  text-align: center;
  padding-top: 10px;
  font-family: 'Kanit', 'Verdana', sans-serif;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Span = styled.p<{ colour: string }>`
  font-size: 12px;
  color: ${(props) => props.colour};
  margin: -5px 0 10px 0;
  text-align: center;
`;

const SpanLink = styled.a<{ 
  colour: string,
  hover: string
}>`
  color: ${(props) => props.colour};
  &:hover {
    color: ${(props) => props.hover};
  }
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
      />
      <About id='about'>
        <InnerWrapper>
          <Title>About Me</Title>
          <p>
            I&#39;m a Front End Developer based in Moray, Scotland. I enjoy designing websites and building them with React and TypeScript.
          </p>
          <p>
            I started out my journey as a Front End Engineer building basic hobby sites using plain HTML, CSS and Javascript. I made the 
            jump up to using Angular in late 2018/early 2019. I spent a few years working with this framework, but moving on to React, 
            NextJS and Typescript. I have been building sites with NextJS and Typescript since the summer of 2021.
          </p>
          <p>
          I&#39;m passionate about writing clean, efficient code and I&#39;m also very interested in exploring new technologies.
          </p>
          <Subtitle>Experience</Subtitle>
          <p>
            I have 4+ years working as a professional developer/engineer, and a further 4+ years as a hobbyist. Below is a breakdown of 
            how long I have been working with different languages and frameworks, in both a personal and professional capacity.
          </p>
          <ul>
            <li>HTML, CSS and JS - 8+ years</li>
            <li>Angular - 3+ years</li>
            <li>React/NextJS - 1+ years</li>
          </ul>
        </InnerWrapper>
      </About>
      <Projects id='projects'>
        <InnerWrapper>
          <Title>My Projects</Title>
        </InnerWrapper>
      </Projects>
      <Experience id='experience'>
        <InnerWrapper>
          <Title>Experience</Title>
        </InnerWrapper>
      </Experience>
      <FooterContainer colour={colourValues.primary}>
           <CopyrightText colour={colourValues.white}>
             &copy; Reece Morgan 2022
           </CopyrightText>
           <SocialMediaWrapper>
             <Icon
               iconUrl="/images/icons/facebook.svg"
               altText="Facebook"
               url="https://www.facebook.com/reece.morgan.1996/"
             />
             <Icon
               iconUrl="/images/icons/twitter.svg"
               altText="Twitter"
               url="https://twitter.com/reecemorgandev"
             />
             <Icon
               iconUrl="/images/icons/instagram.svg"
               altText="Instagram"
               url="https://www.instagram.com/reecemorgandev/"
             />
             <Icon
               iconUrl="/images/icons/linkedin.svg"
               altText="LinkedIn"
               url="https://www.linkedin.com/in/reece-morgan-dev/"
             />
             <Icon
               iconUrl="/images/icons/github.svg"
               altText="Github"
               url="https://github.com/AllusInteractive"
             />
           </SocialMediaWrapper>
           <Span colour={colourValues.white}>
             <SpanLink
               colour={colourValues.white}
               hover={colourValues.hover}
               href="https://icons8.com"
               target="_blank"
               rel="noreferrer"
             > 
              Icons by Icons8
             </SpanLink>
           </Span>
         </FooterContainer>
    </PageWrapper>
  )
}

export default HomePage;
