import styled from "styled-components";
import Link from 'next/link';

interface Props {
    bgColour: string;
    linkColour: string;
    hoverColour: string;
}

const NavContainer = styled.nav<{ colour: string }>`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.colour};
    position: sticky;
    top: 0;
`;

const LinkContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const StyledLink = styled.a<{ colour: string, hover: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.colour};
    margin: 0 20px;
    text-transform: uppercase;
    font-weight: 600;
    :hover {
        color: ${(props) => props.hover};
    }
`;

export const StickyNav = ( {bgColour, linkColour, hoverColour}: Props ) => {
    return (
        <NavContainer colour={bgColour}>
            <LinkContainer>
                <Link href='#about' passHref>
                    <StyledLink colour={linkColour} hover={hoverColour}>About</StyledLink>
                </Link>
                <Link href='#projects' passHref>
                    <StyledLink colour={linkColour} hover={hoverColour}>Projects</StyledLink>
                </Link>
                <Link href='#journey' passHref>
                    <StyledLink colour={linkColour} hover={hoverColour}>My Journey</StyledLink>
                </Link>
            </LinkContainer>
        </NavContainer>
    )
};