import styled from 'styled-components';
import colourValues from '../settings/colours';

const PageWrapper = styled.div`
  width: 100%;
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

const HomePage = () => {
  return(
    <PageWrapper>
      <Welcome>
        <WelcomeWrapper>
          <WelcomeMessage>Hi, I&#39;m <Bold>Reece</Bold>.</WelcomeMessage>
          <WelcomeSubMessage>I&#39;m a <Bold>Front End Developer</Bold>.</WelcomeSubMessage>
        </WelcomeWrapper>
      </Welcome>
      <About>
        <InnerWrapper>
          <Title>About Me</Title>
          <p>
            I&#39;m a Front End Developer based in Moray, Scotland. I enjoy designing websites and then building them with React and TypeScript.
            I&#39;m passionate about writing clean, efficient code and I&#39;m interested in exploring new technologies.
          </p>
        </InnerWrapper>
      </About>
      <Projects>
        <InnerWrapper>
          <Title>My Projects</Title>
        </InnerWrapper>
      </Projects>
      <Experience>
        <InnerWrapper>
          <Title>Experience</Title>
        </InnerWrapper>
      </Experience>
    </PageWrapper>
  )
}

export default HomePage;
