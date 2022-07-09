import styled from "styled-components";
import breakpointValues from "../../settings/breakpoints";
import { HeaderLink } from "./header-link";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

interface Props {
  bgColour: string;
  titleColour: string;
  hoverColour: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
}

const HeaderContainer = styled.header<{colour: string}>`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.colour};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DesktopLinkContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  width: calc(100% - 60px);
  @media (min-width: ${breakpointValues.tablet}) {
    display: flex;
    width: calc(100% - 450px);
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
    width: calc(100% - 450px);
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
`;

const HeaderLogo = styled.div<{
  mobileImageUrl: string;
  desktopImageUrl: string;
}>`
  background-image: url(${(props) => props.mobileImageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 70px;
  margin: 5px;
  @media (min-width: ${breakpointValues.sm}) {
    background-image: url(${(props) => props.desktopImageUrl});
    width: 450px;
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

export const Header = ({bgColour, titleColour, hoverColour, mobileImageUrl, desktopImageUrl}: Props): JSX.Element => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <HeaderContainer colour={bgColour}>
      <FlexContainer>
        <LogoLink href="/">
          <HeaderLogo mobileImageUrl={mobileImageUrl} desktopImageUrl={desktopImageUrl} />
        </LogoLink>
        <DesktopLinkContainer>
          <HeaderLink
            titleColour={titleColour}
            hoverColour={hoverColour}
            url="/rpgs"
          >
            RPGs
          </HeaderLink>
          <HeaderLink
            titleColour={titleColour}
            hoverColour={hoverColour}
            url="/platformers"
          >
            Platformers
          </HeaderLink>
          <HeaderLink
            titleColour={titleColour}
            hoverColour={hoverColour}
            url="/demos-and-prototypes"
          >
            Demos/Prototypes
          </HeaderLink>
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
