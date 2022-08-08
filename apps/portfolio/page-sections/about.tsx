import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';

const Container = styled.div`
  background-color: ${colourValues.secondary};
  color: ${colourValues.white};
  position: relative;
`;

const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    height: 100%;
    padding: 0 20px;
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

export const About = () => {
    return (
        <Container>
          <Wrapper>
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
              I have 4+ years working as a professional developer/engineer, and a further 6+ years prior to this as a hobbyist/student. Below 
              is a breakdown of how long I have been working with different languages and frameworks, in both a personal and professional capacity.
            </p>
            <ul>
              <li>HTML, CSS and JS - 10+ years</li>
              <li>Angular - 3+ years</li>
              <li>React/NextJS - 1+ years</li>
            </ul>
            <p>
              I also have experience with different Content Managment Systems (CMS). Mostly my experience is with Squidex (as part of my job as a 
              Software Engineer) but I have also explored Builder.io and have started integrating Hygraph into one of my personal projects.
            </p>
          </Wrapper>
          <Anchor id='projects' />
        </Container>
    )
};
