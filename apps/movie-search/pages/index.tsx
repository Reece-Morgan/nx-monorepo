import styled from 'styled-components';
import colourValues from '../settings/colours';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${colourValues.black};
  color: ${colourValues.white};
  min-height: auto;
  height: 100vh;
  min-height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <h1>The Movie Search Engine!</h1>
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;