import breakpointValues from "apps/movie-search/settings/breakpoints";
import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components"
import { useForm } from 'react-hook-form';

interface Props {
    title: string;
    year: number;
    type: string;
    rating: string;
}

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

const ErrorMsg = styled.p`
    font-size: 1em;
    color: ${colourValues.error};
    margin: 0;
    text-align: left;
    padding: 5px 0 0 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpointValues.xs}) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const Button = styled.button`
    background-color: ${colourValues.black};
    color: ${colourValues.white};
    border: 2px solid ${colourValues.black};
    border-radius: 10px;
    width: 75%;
    margin: 5px auto;
    cursor: pointer;
    padding: 5px;

    :hover {
        background-color: ${colourValues.white};
        color: ${colourValues.black};
    }

    @media (min-width: ${breakpointValues.xs}) {
        width: 40%;
    }
`;

const AltButton = styled(Button)`
    background-color: ${colourValues.white};
    color: ${colourValues.black};
    border: 2px solid ${colourValues.black};

    :hover {
        background-color: ${colourValues.black};
        color: ${colourValues.white};
    }
`;

const Span = styled.span`
    font-size: 0.75em;
`;

export const AdvancedSearch =() => {
    const { register, handleSubmit, errors } = useForm<Props>();

    const onSubmit = handleSubmit(data => {
        console.log('Form Data: ' + JSON.stringify(data));
    });

    return (
        <Wrapper>
            <Form onSubmit={onSubmit}>
                <Label htmlFor='title'>Title:*</Label>
                <Input 
                    type='text' 
                    id='title' 
                    name='title' 
                    placeholder='Star Wars'
                    ref={register({
                        required: {
                            value: true,
                            message: 'This is required',
                        },
                    })}
                />
                <ErrorMsg>{errors.title && 'Please enter a title'}</ErrorMsg>
                <Label htmlFor='year'>Year:*</Label>
                <Input 
                    type='numeric' 
                    maxLength={4} 
                    id='year' 
                    name='year' 
                    placeholder='1977'
                    ref={register({
                        required: {
                            value: true,
                            message: 'This is required',
                        },
                        pattern: { value: /[0-9]{4}/, message: ''},
                    })}
                />
                <ErrorMsg>{errors.year && 'Please enter a valid year'}</ErrorMsg>
                <Label htmlFor='type'>Media Type:*</Label>   {/* TODO - change input to dropdown/enum */}
                <Input 
                    type='text' 
                    id='type' 
                    name='type' 
                    placeholder='Movie'
                    ref={register({
                        required: {
                            value: true,
                            message: 'This is required',
                        },
                    })}
                />
                <ErrorMsg>{errors.type && 'Please choose a media type'}</ErrorMsg>
                <Label htmlFor='rating'>Rating:</Label>
                <Input 
                    type='text' 
                    id='rating' 
                    name='rating' 
                    placeholder='PG'
                    ref={register()}
                />
                <Span>* Required</Span>
                <ButtonWrapper>
                    <Button>Search</Button>
                    <AltButton>Clear</AltButton>
                </ButtonWrapper>
            </Form>
        </Wrapper>    
    )
}
