import styled from 'styled-components';
import colourValues from '../settings/colours';

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
  font-size: 10vw;
  margin: 0;
  font-family: 'Kanit', 'Verdana', sans-serif;
`;

const SubMessage = styled(Message)`
  font-size: 7.5vw;
`;

const Bold = styled.span`
  font-weight: 800;
`;

export const Welcome = () => {
    return (
        <Container id='welcome'>
          <Wrapper>
            <Message>Hi, I&#39;m <Bold>Reece</Bold>.</Message>
            <SubMessage>I&#39;m a <Bold>Front End<br/>Developer</Bold>.</SubMessage>
          </Wrapper>
        </Container>
    )
};
