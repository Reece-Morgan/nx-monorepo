import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { timeLineData } from '../data';
import { Timeline } from '@allus-interactive/component-library';

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

const Paragraph = styled.div`
  margin-top: -20px;
`;

export const Journey = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Journey</Title>
                <Paragraph>
                  This timeline charts my course through the world of web development. From starting out as a casual hobbyist, to undertaking a degree at my local college, 
                  to finding employment as a professional  developer. This is a complete timeline of my journey as a Front End Developer... so far.
                </Paragraph>
            </Wrapper>
            <Timeline data={timeLineData} />
        </Container>
    )
};
