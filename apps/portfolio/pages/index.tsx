import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 10px 0 0 0;
  color: ${colourValues.title};
`;

const HomePage = () => {
  return(
    <Wrapper>
      <Title>My portfolio</Title>
    </Wrapper>
  )
}

export default HomePage;
