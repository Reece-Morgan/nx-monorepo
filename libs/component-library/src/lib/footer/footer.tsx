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

const Span = styled.p<{ colour: string }>`
  font-size: 12px;
  color: ${(props) => props.colour};
  margin: -5px 0 10px 0;
  text-align: center;
`;

const SpanLink = styled.a<{ 
  colour: string,
  hover: string
}>`
  color: ${(props) => props.colour};
  &:hover {
    color: ${(props) => props.hover};
  }
`;

export const Footer = ({ bgColour, textColour, hoverColour }: Props) => (
         <FooterContainer colour={bgColour}>
           <LinkWrapper>
             <Link
               colour={textColour}
               hover={hoverColour}
               href="/static/about-allus"
             >
               About Allus
             </Link>
             <LinkSeparator colour={textColour}> | </LinkSeparator>
             <Link
               colour={textColour}
               hover={hoverColour}
               href="/static/privacy-policy"
             >
               Privacy Policy
             </Link>
           </LinkWrapper>
           <CopyrightText colour={textColour}>
             Copyright Allus Interactive 2017-2022
           </CopyrightText>
           <SocialMediaWrapper>
             <Icon
               iconUrl="/images/icons/facebook.svg"
               altText="Facebook"
               url="https://www.facebook.com/AllusInteractive/"
             />
             <Icon
               iconUrl="/images/icons/instagram.svg"
               altText="Instagram"
               url="https://www.instagram.com/allusinteractive/"
             />
             <Icon
               iconUrl="/images/icons/twitter.svg"
               altText="Twitter"
               url="https://twitter.com/AllusGameDev"
             />
             <Icon
               iconUrl="/images/icons/itch-io.svg"
               altText="itch.io"
               url="https://allusinteractive.itch.io/"
             />
             <Icon
               iconUrl="/images/icons/linkedin.svg"
               altText="LinkedIn"
               url="https://www.linkedin.com/in/reece-morgan-dev/"
             />
             <Icon
               iconUrl="/images/icons/github.svg"
               altText="Github"
               url="https://github.com/AllusInteractive"
             />
           </SocialMediaWrapper>
           <Span colour={textColour}>
             Icons by
             <SpanLink
               colour={textColour}
               hover={hoverColour}
               href="https://icons8.com"
               target="_blank"
               rel="noreferrer"
             >
               {' '}
               Icons8
             </SpanLink>
           </Span>
         </FooterContainer>
       );
