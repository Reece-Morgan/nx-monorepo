import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 20px 10%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
    padding: 5px 0;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid ${colourValues.black};
    border-radius: 5px;
    box-sizing: border-box;
    @media (min-width: ${breakpointValues.xs}) {
        padding: 5px 20px;
    }
`;

const Button = styled.button`
    background-color: ${colourValues.black};
    color: ${colourValues.white};
    border: 2px solid ${colourValues.black};
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
    cursor: pointer;

    :hover {
        background-color: ${colourValues.white};
        color: ${colourValues.black};
    }
`;

export const AdvancedSearch =() => {
    return (
        <Wrapper>
            <Form>
                <Label htmlFor='title'>Title:</Label>
                <Input type='text' id='title' name='title' placeholder='Star Wars' required />
                <Label htmlFor='year'>Year:</Label>
                <Input type='numeric' id='year' name='year' placeholder='1977' required />
                <Label htmlFor='type'>Type:</Label>
                <Input type='text' id='type' name='type' placeholder='Movie' required />
                <Label htmlFor='rating'>Rating:</Label>
                <Input type='text' id='rating' name='rating' placeholder='PG' required />
                <Button type="submit" value="Submit">Search</Button>
            </Form>
        </Wrapper>    
    )
}