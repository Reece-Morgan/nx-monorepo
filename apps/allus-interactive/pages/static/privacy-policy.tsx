import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 170px);
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-bottom: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
  @media (max-width: ${breakpointValues.lg}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export function PrivacyPolicy() {
  return (
    <Wrapper>
      <Container>
        <p>Privacy Policy</p>
        <p>Container content goes here</p>
      </Container>
    </Wrapper>
  );
}

export default PrivacyPolicy;
