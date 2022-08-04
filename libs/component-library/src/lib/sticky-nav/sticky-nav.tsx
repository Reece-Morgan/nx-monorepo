import styled from "styled-components";

interface Props {
    bgColour: string;
    linkColour: string;
}

const NavContainer = styled.nav<{ colour: string }>`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.colour};
    position: sticky;
    top: 0;
`;

const Temp = styled.p<{ colour: string }>`
    color: ${(props) => props.colour}
`;

export const StickyNav = ( {bgColour, linkColour}: Props ) => {
    return (
        <NavContainer colour={bgColour}>
            <Temp colour={linkColour}>I'm a Sticky Nav</Temp>
        </NavContainer>
    )
};