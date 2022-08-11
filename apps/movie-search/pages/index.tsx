import { useEffect, useState } from 'react';
import styled from 'styled-components';
import colourValues from '../settings/colours';
import { MovieList } from '../src/components/movie-list';
import { MovieListHeading } from '../src/components/movie-list-heading';
import { SearchBox } from '../src/components/search-box';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  min-height: auto;
  height: 100vh;
  min-height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  const setSearchValues = (value: string) => {
    setSearchValue(value);
  }

  const getMovieRequest = async (searchValue) => {
    const apiKey = '5fd15d12';
    const url = `http://www.omdbapi.com/?s=${searchValue}&apiKey=${apiKey}`;

    console.log('Search Value: ' + searchValue);

    const data = await fetch(url);
    const response = await data.json();

    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <PageWrapper>
      <Container>
        <div>
          <MovieListHeading />
          <SearchBox value={searchValue} onChange={setSearchValues} />
        </div>
        <Wrapper>
          <MovieList movies={movies} />
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;