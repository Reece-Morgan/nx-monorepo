import { useState } from 'react';
import styled from 'styled-components';
import colourValues from '../settings/colours';
import { MovieList } from '../src/components/movie-list';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${colourValues.black};
  color: ${colourValues.white};
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
`;

const HomePage = () => {
  const [movies, setMovies] = useState([{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }]);

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <MovieList movies={movies} />
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;