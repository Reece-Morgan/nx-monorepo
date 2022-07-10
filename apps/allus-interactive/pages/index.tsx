import styled from 'styled-components';

const StyledPage = styled.div``;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
`

export function Index() {
  return (
    <StyledPage>
      <Wrapper>
        <Container>
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome allus-interactive 👋
            </h1>
          </div>
        </Container>
      </Wrapper>
    </StyledPage>
  );
}

export default Index;
