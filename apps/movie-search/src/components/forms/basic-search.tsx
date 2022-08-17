import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"
import { useForm } from 'react-hook-form';

interface Props {
    setMovies: (value) => void;
}

interface FormProps {
    title: string;
}

const Wrapper = styled.div``;

const Form = styled.form`
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    padding: 5px 0;
    margin: 8px 5px 5px 0;
    display: inline-block;
    max-height: 30px;
    height: 30px;
    border: 1px solid ${colourValues.black};
    border-radius: 5px;
    box-sizing: border-box;
    width: 50%;
    @media (min-width: ${breakpointValues.xs}) {
        padding: 5px 20px;
    }
`;

const Button = styled.button`
    background-color: ${colourValues.white};
    color: ${colourValues.black};
    border: 2px solid ${colourValues.white};
    border-radius: 10px;
    width: 45%;
    margin: 8px 0 5px 5px;
    cursor: pointer;
    padding: 5px;
    max-height: 30px;
    height: 30px;
    :hover {
        background-color: ${colourValues.black};
        color: ${colourValues.white};
    }

    @media (min-width: ${breakpointValues.xs}) {
        width: 50%;
    }
`;

export const BasicSearch = ({ setMovies }: Props) => {
    const { register, handleSubmit } = useForm<FormProps>();

    const onSubmit = handleSubmit(async data => {
        const apiKey = '5fd15d12';
        const url = `https://www.omdbapi.com/?s=${data.title}&type=movie&apiKey=${apiKey}`;

        const res = await fetch(url);
        const response = await res.json();

        if (response.Search) {
            setMovies(response.Search);
        }
    });

    return (
        <Wrapper>
            <Form onSubmit={onSubmit}>
                <Input 
                    type='text' 
                    id='title' 
                    name='title' 
                    placeholder='Search...'
                    ref={register()}
                />
                <Button>Search</Button>
            </Form>
        </Wrapper>    
    )
}
