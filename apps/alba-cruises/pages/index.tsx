import styled from 'styled-components';
import colourValues from '../settings/colours';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${colourValues.primary};
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

const Message = styled.h1`
  font-size: 5vw;
  margin: 0;
  font-family: 'Verdana', sans-serif;
`;

const SubMessage = styled(Message)`
  font-size: 3vw;
`;

const Link = styled.a`
  color: ${colourValues.hover};
  :hover {
    color: ${colourValues.white};
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <Message>This Project is a Portfolio Piece. It is currently under maintenance</Message>
          <SubMessage>Click <Link href='https://www.reecemorgan.co.uk'>here</Link> to return to my Portfolio</SubMessage>
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;
