import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';

const Container = styled.div`
  background-color: ${colourValues.secondary};
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

export const Journey = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Journey</Title>
            </Wrapper>
        </Container>
    )
};
