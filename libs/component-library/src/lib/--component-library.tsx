import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentLibraryProps {}

const StyledComponentLibrary = styled.div`
  color: pink;
`;

export function ComponentLibrary(props: ComponentLibraryProps) {
  return (
    <StyledComponentLibrary>
      <h1>Welcome to ComponentLibrary!</h1>
    </StyledComponentLibrary>
  );
}

export default ComponentLibrary;
