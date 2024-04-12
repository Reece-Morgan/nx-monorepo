import { useState } from 'react';
import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { AddFavourite } from '../src/components/add-favourite';
import { MovieList } from '../src/components/movie-list';
import { MovieListHeading } from '../src/components/movie-list-heading';
import { Popup } from '../src/components/popup';
import { RemoveFavourite } from '../src/components/remove-favourite';
import { AdvancedSearchBox } from '../src/components/advanced-search-box';
import { useDispatch } from 'react-redux';
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from '../src/redux/favourites/favourites';
import { useAppSelector } from '../src/redux/store';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Header = styled.header`
  width: 100vw;
  height: auto;
  background-color: ${colourValues.black};
  color: ${colourValues.white};
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1em;
  @media (min-width: ${breakpointValues.xs}) {
    font-size: 1.5em;
  }
`;

const Text = styled.p`
  font-size: 1em;
  @media (min-width: ${breakpointValues.xs}) {
    font-size: 1.5em;
  }
`;

const SearchAdvanced = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [popupDisplay, setPopupDisplay] = useState<'none' | 'block'>('none');
  const { movies: favourites } = useAppSelector((state) => state.Favourites);

  const togglePopup = () => {
    setPopupDisplay(popupDisplay === 'none' ? 'block' : 'none');
  };

  const setSearchValue = (value) => {
    setMovies(value);
  };

  const addFavouriteMovie = (movie) => {
    dispatch(addMovieToFavourites(movie));
  };

  const removeFavouriteMovie = (movie) => {
    dispatch(removeMovieFromFavourites(movie));
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <HeaderWrapper>
            <MovieListHeading />
            <AdvancedSearchBox
              setMovies={setSearchValue}
              togglePopup={togglePopup}
            />
          </HeaderWrapper>
        </Header>
        <Wrapper>
          {movies.length === 0 && favourites.length === 0 && (
            <>
              <Text>
                Use the search bar to look up any movie, TV show or video game
              </Text>
              <Text>
                Click Add to Favourites to keep track of all your favourites!
              </Text>
            </>
          )}
          {favourites && favourites.length > 0 && (
            <MovieWrapper>
              <Title>Favourites</Title>
              <MovieList
                movies={favourites}
                favourites={<RemoveFavourite />}
                onClick={removeFavouriteMovie}
              />
            </MovieWrapper>
          )}
          {movies && movies.length > 0 && (
            <MovieWrapper>
              <Title>Search Results</Title>
              <MovieList
                movies={movies}
                favourites={<AddFavourite />}
                onClick={addFavouriteMovie}
              />
            </MovieWrapper>
          )}
        </Wrapper>
        <Popup
          display={popupDisplay}
          title="Advanced Search"
          closePopup={togglePopup}
          setMovies={setSearchValue}
        />
      </Container>
    </PageWrapper>
  );
};

export default SearchAdvanced;
