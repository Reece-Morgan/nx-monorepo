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

export const Footer = ({ bgColour, textColour }: Props) => (
  <FooterContainer colour={bgColour}>
    <CopyrightText colour={textColour}>
      Copyright Allus Interactive 2022
    </CopyrightText>
  </FooterContainer>
);
