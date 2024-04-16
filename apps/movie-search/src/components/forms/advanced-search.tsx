import breakpointValues from 'apps/movie-search/settings/breakpoints';
import colourValues from 'apps/movie-search/settings/colours';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { callApiRoute } from '../../../api/movie-api';

interface Props {
  setMovies: (value) => void;
  closePopup: () => void;
}

interface FormProps {
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

const Select = styled.select`
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

const AltButton = styled.input`
  background-color: ${colourValues.white};
  color: ${colourValues.black};
  border: 2px solid ${colourValues.black};
  border-radius: 10px;
  width: 75%;
  margin: 5px auto;
  cursor: pointer;
  padding: 5px;

  :hover {
    background-color: ${colourValues.black};
    color: ${colourValues.white};
  }

  @media (min-width: ${breakpointValues.xs}) {
    width: 40%;
  }
`;

const Span = styled.span`
  font-size: 0.75em;
`;

export const AdvancedSearch = ({ setMovies, closePopup }: Props) => {
  const { register, handleSubmit } = useForm<FormProps>();

  const onSubmit = handleSubmit(async (data) => {
    const searchData = `${data.title}&year=${data.year}&type=${data.type}`;

    const response = await callApiRoute('getMoviesOrShows?search=' + searchData);

    if (response && response.Search) {
      setMovies(response.Search);
      closePopup();
    }
  });

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="title">Title:*</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Star Wars"
          {...register('title', { required: true })}
        />
        <Label htmlFor="year">Year:*</Label>
        <Input
          type="numeric"
          maxLength={4}
          id="year"
          name="year"
          placeholder="1977"
          {...register('year', { required: true, pattern: { value: /[0-9]{4}/, message: '' } })}
        />
        <Label htmlFor="type">Media Type:*</Label>
        <Select
          id="type"
          name="type"
          placeholder="Movie, Game, Series etc."
          {...register('type', { required: true })}
        >
          <option value="movie">Movie</option>
          <option value="series">TV Show</option>
          <option value="game">Video Game</option>
        </Select>
        <Span>* Required</Span>
        <ButtonWrapper>
          <Button>Search</Button>
          <AltButton type="reset" value="Clear" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};
