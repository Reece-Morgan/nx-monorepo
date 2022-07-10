import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-bottom: 3rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
  @media (max-width: ${breakpointValues.lg}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
`;

const Span = styled.span`
  display: block;
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
`;

export function Index() {
  return (
    <Wrapper>
      <Container>
          <H1>
            <Span> Hello there, </Span>
            Welcome allus-interactive 👋
          </H1>
      </Container>
    </Wrapper>
  );
}

export default Index;
