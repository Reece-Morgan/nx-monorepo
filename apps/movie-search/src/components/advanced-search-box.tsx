import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components";
import { BasicSearch } from "./forms/basic-search";

interface Props {
    setMovies: (value) => void;
    togglePopup: () => void;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button`
    background-color: ${colourValues.black};
    color: ${colourValues.white};
    border: 2px solid ${colourValues.white};
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    max-height: 30px;
    height: 30px;
    :hover {
        background-color: ${colourValues.white};
        color: ${colourValues.black};
    }
`;

export const AdvancedSearchBox = ({ setMovies, togglePopup }: Props) => {
    return (
        <Wrapper>
            <BasicSearch setMovies={setMovies}/>
            <Button onClick={togglePopup}>Advanced Search</Button>
        </Wrapper>
    )
}