import styled from "styled-components";
import breakpointValues from '../../settings/breakpoints';

interface Props {
  url: string;
  children: React.ReactNode;
  titleColour: string;
  hoverColour: string;
}

const StyledLink = styled.a<{
  colour: string;
  hoverColour: string;
}>`
  color: ${(props) => props.colour};
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.hoverColour};
    cursor: pointer;
  }
  @media (max-width: ${breakpointValues.md}) {
    font-size: 14px;
  }
`;

export const HeaderLink = ({url, children, titleColour, hoverColour}: Props): JSX.Element => {
  return (
    <StyledLink colour={titleColour} hoverColour={hoverColour} href={url}>
      {children}
    </StyledLink>
  );
}
