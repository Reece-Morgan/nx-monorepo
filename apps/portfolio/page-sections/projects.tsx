import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';

const Container = styled.div`
  background-color: ${colourValues.primary};
  color: ${colourValues.white};
  min-height: 100vh;
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

const Anchor = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
`;

export const Projects = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Projects</Title>
            </Wrapper>
            <Anchor id='journey' />
        </Container>
    )
};