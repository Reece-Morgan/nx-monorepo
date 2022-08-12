import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"

interface Props {
    display: string;
    title: string;
    content: React.ReactNode;
    onClick: () => void;
}

// TODO: remove max-width and min-height
const Wrapper = styled.div<{ display: string }>`
    max-width: 400px; 
    min-height: 600px;
    background-color: ${colourValues.white};
    position: relative;
    margin: 0 auto;
    border-radius: 15px;
    z-index: 21;
    display: ${(props) => props.display ? props.display : 'none'};
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    padding: 0 5px;
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

export const Popup = ({ display, title, content, onClick }: Props) => {
    return (
        <>
            <Wrapper display={display}>
                <Header>
                    <span></span>
                    <Title>{title}</Title>
                    <Span onClick={onClick}>X</Span>
                </Header>
                {content}
            </Wrapper>
            <Overlay display={display} onClick={onClick}/>
        </>
    )
}