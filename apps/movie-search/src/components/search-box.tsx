import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components";
import { Popup } from "./popup";

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
    background-color: ${colourValues.white};
    color: ${colourValues.black};
    border: 2px solid ${colourValues.white};
    border-radius: 10px;
    width: 100%;
    cursor: pointer;

    :hover {
        background-color: ${colourValues.black};
        color: ${colourValues.white};
    }
`;

export const SearchBox = ({ value, onChange, onClick }: Props) => {
    return (
        <Wrapper>
            <Input 
                defaultValue={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder='Start typing to search...'
            />
            <Button onClick={onClick}>Advanced Search</Button>
        </Wrapper>
    )
}