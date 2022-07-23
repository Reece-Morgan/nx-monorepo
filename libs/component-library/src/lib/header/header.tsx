import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { HeaderLink } from './header-link';
import { useState } from 'react';
import { MobileMenu } from './mobile-menu';

interface Props {
  bgColour: string;
  titleColour: string;
  hoverColour: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
  links: {
    url: string;
    text: string;
  }[];
}

const HeaderContainer = styled.header<{ colour: string }>`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.colour};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DesktopLinkContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  width: calc(100% - 60px);
  @media (min-width: ${breakpointValues.md}) {
    display: flex;
    width: 50%;
  }
  @media (min-width: ${breakpointValues.tablet}) and (max-width: ${breakpointValues.md}) {
    display: flex;
    width: 60%;
  }
`;

const MobileLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: calc(100% - 60px);
  @media (min-width: ${breakpointValues.tablet}) {
    display: none;
  }
  @media (min-width: ${breakpointValues.sm}) {
    width: 50%;
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
  width: 50%;
  @media (max-width: ${breakpointValues.md}) {
    width: 40%;
  }
`;

const HeaderLogo = styled.div<{
  mobileImageUrl: string;
  desktopImageUrl: string;
}>`
  background-image: url(${(props) => props.mobileImageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 60px;
  width: 70px;
  margin: 5px;
  @media (min-width: ${breakpointValues.sm}) {
    background-image: url(${(props) => props.desktopImageUrl});
    width: 100%;
  }
`;

const BurgerMenuContainer = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;

const BurgerMenu = styled.div<{ colour: string }>`
  width: 35px;
  height: 5px;
  background-color: ${(props) => props.colour};
  margin: 3px 0;
`;

const Close = styled.p<{ colour: string }>`
  color: ${(props) => props.colour};
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  margin: 0;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

export const Header = ({
  bgColour,
  titleColour,
  hoverColour,
  mobileImageUrl,
  desktopImageUrl,
  links,
}: Props): JSX.Element => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <HeaderContainer colour={bgColour}>
      <FlexContainer>
        <LogoLink href="/">
          <HeaderLogo
            mobileImageUrl={mobileImageUrl}
            desktopImageUrl={desktopImageUrl}
          />
        </LogoLink>
        <DesktopLinkContainer>
          {links &&
            links.map((link, key) => (
              <HeaderLink
                key={link.url}
                titleColour={titleColour}
                hoverColour={hoverColour}
                url={link.url}
              >
                {link.text}
              </HeaderLink>
            ))}
        </DesktopLinkContainer>
        <MobileLinkContainer>
          <BurgerMenuContainer onClick={() => toggleMenu()}>
            {MenuOpen ? (
              <Close colour={titleColour}>X</Close>
            ) : (
              <>
                <BurgerMenu colour={titleColour} />
                <BurgerMenu colour={titleColour} />
                <BurgerMenu colour={titleColour} />
              </>
            )}
          </BurgerMenuContainer>
        </MobileLinkContainer>
      </FlexContainer>
      {MenuOpen && (
        <>
          <MobileMenu bgColour={bgColour} titleColour={titleColour} />
          <Overlay onClick={() => toggleMenu()} />
        </>
      )}
    </HeaderContainer>
  );
};
