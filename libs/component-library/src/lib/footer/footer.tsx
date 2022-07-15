import styled from "styled-components";

interface Props {
  bgColour: string;
  textColour: string;
}

const FooterContainer = styled.footer<{ colour: string }>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.colour};
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

const Link = styled.a<{ colour: string }>`
  color: ${(props) => props.colour};
  font-size: 1em;
  margin: 0;
  text-align: center;
  padding: 10px 10px 0 10px;
`;

export const Footer = ({ bgColour, textColour }: Props) => (
  <FooterContainer colour={bgColour}>
    <CopyrightText colour={textColour}>
      Copyright Allus Interactive 2022
    </CopyrightText>
    <LinkWrapper>
      <Link colour={textColour} href='/static/about-allus'>About Allus</Link>
      <LinkSeparator colour={textColour}> | </LinkSeparator>
      <Link colour={textColour} href='/static/privacy-policy'>Privacy Policy</Link>
    </LinkWrapper>
  </FooterContainer>
);
