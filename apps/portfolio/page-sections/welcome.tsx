import styled from 'styled-components';
import colourValues from '../settings/colours';
import breakpointValues from '../settings/breakpoints';
import { NeonAnimation } from '../settings/animations';

const Container = styled.div`
  background: url('/images/backgrounds/keyboard.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  align-items: center;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
`;

// TODO: add animation back in and review colours in animations.ts
const Message = styled.h1`
  font-size: 10vw;
  margin: 0;
  font-family: 'Kanit', 'Verdana', sans-serif;
  // animation: ${NeonAnimation} 1.5s ease infinite;
`;

const SubMessage = styled(Message)`
  font-size: 6vw;
  @media (min-width: ${breakpointValues.lg}) {
  font-size: 5vw;
  }
`;

const Bold = styled.span`
  font-weight: 800;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50vw;
  height: 50vw;
  @media (min-width: ${breakpointValues.tablet}) and (max-width: ${breakpointValues.lg}) {
    width: 25vw;
    height: 25vw;
  }
  @media (min-width: ${breakpointValues.lg}) {
    width: 15vw;
    height: 15vw;
  }
`;

export const Welcome = () => {
    return (
        <Container id='welcome'>
          <Wrapper>
            <Message>Hi, I&#39;m <Bold>Reece</Bold>.</Message>
            <Avatar src='/images/svg/avatar.svg' alt='Avatar' />
            <SubMessage>I&#39;m a <Bold>Front End<br/>Developer</Bold>.</SubMessage>
          </Wrapper>
        </Container>
    )
};
