import styled from 'styled-components';
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
`;

const WelcomeWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerWrapper = styled(Wrapper)``;

const Section = styled.div`
  min-height: 100vh;
`;

const Welcome = styled(Section)`
  background-color: ${colourValues.welcome};
  min-height: auto;
  height: 100vh;
`;

const About = styled(Section)`
  background-color: ${colourValues.about};
`;

const Projects = styled(Section)`
  background-color: ${colourValues.projects};
`;

const Experience = styled(Section)`
  background-color: ${colourValues.experience};
`;

const WelcomeMessage = styled.h1`
  font-size: 10vw;
  margin: 0;
  color: ${colourValues.white};
`;

const WelcomeSubMessage = styled(WelcomeMessage)`
  font-size: 7.5vw;
`;

const Bold = styled.span`
  font-weight: 800;
`;

const Title = styled.h1`
  color: ${colourValues.white};
  font-size: 3vw;
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
          <WelcomeSubMessage>I&#39;m a <Bold>Front End Developer</Bold>.</WelcomeSubMessage>
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
            I&#39;m a Front End Developer based in Moray, Scotland. I enjoy designing websites and then building them with React and TypeScript.
            I&#39;m passionate about writing clean, efficient code and I&#39;m interested in exploring new technologies.
          </p>
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
      <FooterContainer colour={colourValues.welcome}>
           <CopyrightText colour={colourValues.white}>
             Copyright Allus Interactive 2017-2022
           </CopyrightText>
           <SocialMediaWrapper>
             <Icon
               iconUrl="/images/icons/facebook.svg"
               altText="Facebook"
               url="https://www.facebook.com/AllusInteractive/"
             />
             <Icon
               iconUrl="/images/icons/instagram.svg"
               altText="Instagram"
               url="https://www.instagram.com/allusinteractive/"
             />
             <Icon
               iconUrl="/images/icons/twitter.svg"
               altText="Twitter"
               url="https://twitter.com/AllusGameDev"
             />
             <Icon
               iconUrl="/images/icons/itch-io.svg"
               altText="itch.io"
               url="https://allusinteractive.itch.io/"
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
             Icons by
             <SpanLink
               colour={colourValues.white}
               hover={colourValues.hover}
               href="https://icons8.com"
               target="_blank"
               rel="noreferrer"
             >
               {' '}
               Icons8
             </SpanLink>
           </Span>
         </FooterContainer>
    </PageWrapper>
  )
}

export default HomePage;
