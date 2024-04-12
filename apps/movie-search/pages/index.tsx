import { useState } from 'react';
import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { MovieList } from '../src/components/movie-list';
import { MovieListHeading } from '../src/components/movie-list-heading';
import { Popup } from '../src/components/popup';
import { AdvancedSearchBox } from '../src/components/advanced-search-box';
import Link from 'next/link';
import { Movie } from '../src/types/types';

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

const Text = styled.p`
  font-size: 1em;
  @media (min-width: ${breakpointValues.xs}) {
    font-size: 1.5em;
  }
`;

const SearchAdvanced = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popupDisplay, setPopupDisplay] = useState<'none' | 'block'>('none');

  const togglePopup = () => {
    setPopupDisplay(popupDisplay === 'none' ? 'block' : 'none');
  };

  const setSearchValue = (value) => {
    setMovies(value);
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
          <Text>
            Use the search bar to look up any movie, TV show or video game
          </Text>
          <Text>Click Add to Favourites to save your favourite media!</Text>
          <Text>
            View your favourites <Link href="/favourites">here</Link>
          </Text>
          {movies && movies.length > 0 && (
            <MovieWrapper>
              <MovieList movies={movies} />
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
