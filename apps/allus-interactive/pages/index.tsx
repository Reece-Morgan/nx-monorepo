import styled from 'styled-components';
import { ComponentLibrary } from '@allus-interactive/component-library';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome allus-interactive 👋
            </h1>
          </div>
          <ComponentLibrary />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
