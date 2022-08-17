import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"
import { AdvancedSearch } from "./forms/advanced-search";

interface Props {
    display: string;
    title: string;
    closePopup: () => void;
    setMovies: (value) => void;
}

const Wrapper = styled.div<{ display: string }>`
    max-width: 400px; 
    background-color: ${colourValues.white};
    position: absolute;
    top: calc(50vh - 210px);;
    left: 0;
    bottom: 0;
    right: 0;
    max-height: 420px;
    margin: 0 auto;
    border-radius: 15px;
    z-index: 21;
    display: ${(props) => props.display ? props.display : 'none'};
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 1em;
    @media (min-width: ${breakpointValues.xs}) {
        font-size: 1.5em;
    }
`;

const Span = styled.span`
    font-size: 1em;
    font-weight: 600;
    margin : 0 15px 0 0;
    position: absolute;
    right: 0px;
    cursor: pointer;
    @media (min-width: ${breakpointValues.xs}) {
        font-size: 1.5em;
    }
`;

const Overlay = styled.div<{ display: string }>`
    background-color: ${colourValues.black};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.5;
    z-index: 20;
    display: ${(props) => props.display ? props.display : 'none'};
`;

export const Popup = ({ display, title, closePopup, setMovies }: Props) => {
    return (
        <>
            <Wrapper display={display}>
                <Header>
                    <Title>{title}</Title>
                    <Span onClick={closePopup}>X</Span>
                </Header>
                <AdvancedSearch setMovies={setMovies} closePopup={closePopup}/>
            </Wrapper>
            <Overlay display={display} onClick={closePopup}/>
        </>
    )
}