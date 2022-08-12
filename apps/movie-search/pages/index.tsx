import { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
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
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Header = styled.header`
  width: 100vw;
  height: auto;
  background-color: ${colourValues.black};
  color: ${colourValues.white};
  margin-bottom: 10px;
`;

const HeaderWrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding 10px;
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
    font-size: 1em;
    @media (min-width: ${breakpointValues.xs}) {
        font-size: 1.5em;
    }
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const setSearchValues = (value: string) => {
    setSearchValue(value);
  }

  const addFavouriteMovie = (movie) => {
    const favouriteList = [...favourites, movie];
    setFavourites(favouriteList);
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
        <Header>
          <HeaderWrapper>
            <MovieListHeading />
            <SearchBox value={searchValue} onChange={setSearchValues} />
          </HeaderWrapper>
        </Header>
        <Wrapper>
          {favourites && favourites.length > 0 && (
            <MovieWrapper>
              <Title>Favourites</Title>
              <MovieList movies={favourites} onClick={addFavouriteMovie}/>
            </MovieWrapper>
          )}
          {movies && movies.length > 0 && (
            <MovieWrapper>
              <Title>Search Results</Title>
              <MovieList movies={movies} onClick={addFavouriteMovie}/>
            </MovieWrapper>
          )}
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;