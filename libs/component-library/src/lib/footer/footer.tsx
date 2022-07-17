import styled from "styled-components";

interface Props {
  bgColour: string;
  textColour: string;
  hoverColour: string;
}

const FooterContainer = styled.footer<{ colour: string }>`
  width: 100%;
  height: 100px;
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
  </FooterContainer>
);
