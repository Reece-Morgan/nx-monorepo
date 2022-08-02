import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

interface Props {
  bgColour: string;
  titleColour: string;
  title: string;
}

const HeaderContainer = styled.header<{ colour: string }>`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.colour};
`;

const Container = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.h1<{ colour: string }>`
  margin: 7px 0 0 0;
  color: ${(props) => props.colour};
  font-size: 1em;
  font-weight: 800;

  @media (min-width: ${breakpointValues.sm}) {
    font-size: 2em;
  }
`;

export const BasicHeader = ({
  bgColour,
  titleColour,
  title,
}: Props): JSX.Element => {
  return (
    <HeaderContainer colour={bgColour}>
        <Container>
            <a href='/'>
                <Title colour={titleColour}>{title}</Title>
            </a>
        </Container>
    </HeaderContainer>
  );
};
