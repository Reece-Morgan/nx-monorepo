import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { useState } from 'react';

interface Props {
  bgColour: string;
  imageUrl: string;
}

const HeaderContainer = styled.header<{ colour: string }>`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.colour};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoLink = styled.a`
  cursor: pointer;
  width: 50%;
  @media (max-width: ${breakpointValues.md}) {
    width: 40%;
  }
`;

const HeaderLogo = styled.div<{imageUrl: string;}>`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 60px;
  margin: 5px;
`;

export const SimpleHeader = ({
  bgColour,
  imageUrl,
}: Props): JSX.Element => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!MenuOpen);
    const overflow = MenuOpen ? 'auto' : 'hidden';
    document.body.style.overflow = overflow;
  };

  return (
    <HeaderContainer colour={bgColour}>
      <FlexContainer>
        <LogoLink href="/">
          <HeaderLogo
            imageUrl={imageUrl}
          />
        </LogoLink>
      </FlexContainer>
    </HeaderContainer>
  );
};
