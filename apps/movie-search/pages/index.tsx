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

  const getMovieRequest = async () => {
    const apiKey = '5fd15d12';
    const url = `http://www.omdbapi.com/?s=star wars&apiKey=${apiKey}`;

    const data = await fetch(url);
    const response = await data.json();

    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <div>
          <MovieListHeading />
          <SearchBox value={searchValue} onChange={setSearchValue} />
        </div>
        <Wrapper>
          <MovieList movies={movies} />
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;