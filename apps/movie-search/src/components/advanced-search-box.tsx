import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components";
import { BasicSearch } from "./forms/basic-search";

interface Props {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    padding: 5px 0;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid ${colourValues.white};
    border-radius: 5px;
    box-sizing: border-box;
    @media (min-width: ${breakpointValues.xs}) {
        padding: 5px 20px;
    }
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

export const AdvancedSearchBox = ({ value, onChange, onClick }: Props) => {
    return (
        <Wrapper>
            <BasicSearch />
            <Button onClick={onClick}>Advanced Search</Button>
        </Wrapper>
    )
}