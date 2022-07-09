import styled from "styled-components";

interface Props {
  bgColour: string;
  titleColour: string;
}

const MenuContainer = styled.div<{ colour: string }>`
  background-color: ${(props) => props.colour};
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  z-index: 6;
  width: 320px;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled.a<{ colour: string }>`
  color: ${(props) => props.colour};
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 0;
`;

const HR = styled.hr<{ colour: string }>`
  width: 100%;
  border: 1px solid ${(props) => props.colour};
`;

export const MobileMenu = ({bgColour, titleColour}: Props): JSX.Element => (
  <MenuContainer colour={bgColour}>
    <FlexContainer>
      <MenuLink colour={titleColour} href="/">
        Home
      </MenuLink>
      <HR colour={titleColour} />
      <MenuLink colour={titleColour} href="/rpgs">
        RPGs
      </MenuLink>
      <MenuLink colour={titleColour} href="/platformers">
        Platformers
      </MenuLink>
      <MenuLink colour={titleColour} href="/demos-and-prototypes">
        Demos/Prototypes
      </MenuLink>
      <HR colour={titleColour} />
      <MenuLink colour={titleColour} href="/about">
        About Allus
      </MenuLink>
      <MenuLink colour={titleColour} href="/rpgs">
        Privacy Policy
      </MenuLink>
    </FlexContainer>
  </MenuContainer>
);
