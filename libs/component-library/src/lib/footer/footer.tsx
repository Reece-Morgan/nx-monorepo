import styled from "styled-components";
import { Icon } from "../icon/icon";

interface Props {
  bgColour: string;
  textColour: string;
  hoverColour: string;
}

const FooterContainer = styled.footer<{ colour: string }>`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CopyrightText = styled.p<{ colour: string }>`
  color: ${(props) => props.colour};
  font-size: 1em;
  margin: 0;
  text-align: center;
  padding-top: 10px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 300px;
  margin: 0 auto;
  justify-content: center;
`;

const LinkSeparator = styled.p<{ colour: string }>`
  color: ${(props) => props.colour};
  font-size: 1em;
  margin: 0;
  text-align: center;
  padding-top: 10px;
`;

const Link = styled.a<{ 
  colour: string,
  hover: string
}>`
  color: ${(props) => props.colour};
  font-size: 1em;
  margin: 0;
  text-align: center;
  padding: 10px 10px 0 10px;
  &:hover {
    color: ${(props) => props.hover};
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Footer = ({ bgColour, textColour, hoverColour }: Props) => (
  <FooterContainer colour={bgColour}>
    <LinkWrapper>
      <Link colour={textColour} hover={hoverColour} href='/static/about-allus'>About Allus</Link>
      <LinkSeparator colour={textColour}> | </LinkSeparator>
      <Link colour={textColour} hover={hoverColour} href='/static/privacy-policy'>Privacy Policy</Link>
    </LinkWrapper>
    <CopyrightText colour={textColour}>
      Copyright Allus Interactive 2017-2022
    </CopyrightText>
    <SocialMediaWrapper>
      <Icon iconUrl="/images/icons/icon-placeholder.png" altText="Facebook" url="https://www.facebook.com/AllusInteractive/" />
      <Icon iconUrl="/images/icons/icon-placeholder.png" altText="Twitter" url="https://twitter.com/AllusGameDev" />
      <Icon iconUrl="/images/icons/icon-placeholder.png" altText="Instagram" url="https://www.instagram.com/allusinteractive/" />
      <Icon iconUrl="/images/icons/icon-placeholder.png" altText="itch.io" url="https://allusinteractive.itch.io/" />
      <Icon iconUrl="/images/icons/icon-placeholder.png" altText="LinkedIn" url="https://www.linkedin.com/in/reece-morgan-dev/" />
    </SocialMediaWrapper>
  </FooterContainer>
);
