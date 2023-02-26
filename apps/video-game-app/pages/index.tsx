import { Button } from '@allus-interactive/component-library';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export function Index() {
  return (
    <Wrapper>
      <h1>Welcome</h1>
      <Button variant='primary' onClick={() => null} text='Log In' />
      <Button variant='secondary' onClick={() => null} text='Join' />
    </Wrapper>
  );
}

export default Index;
