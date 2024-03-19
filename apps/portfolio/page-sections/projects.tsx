import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { projectData } from '../data';
import { ProjectTile } from '@allus-interactive/component-library';

const Container = styled.div`
  background: url('/images/backgrounds/code.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  padding: 0 20px;
  text-align: right;
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

const TileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1270px;
  margin: 0 auto;
`;

export const Projects = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Projects</Title>
            </Wrapper>
            <Anchor id='journey' />
            <TileWrapper>
              {projectData && projectData.map((project, i) => (
                <ProjectTile
                  key={i}
                  project={project}
                />
              ))}
            </TileWrapper>
        </Container>
    )
};
