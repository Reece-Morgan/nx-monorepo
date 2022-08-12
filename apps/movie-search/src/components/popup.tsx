import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"

interface Props {
    display: string;
    onClick: () => void;
}

const Wrapper = styled.div``;

const Overlay = styled.div<{ display: string }>`
    background-color: ${colourValues.black};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    opacity: 0.5;
    display: ${(props) => props.display ? props.display : 'none'}
`;

export const Popup = ({ display, onClick }: Props) => {
    return (
        <Wrapper>
            <Overlay display={display} onClick={onClick}/>
        </Wrapper>
    )
}