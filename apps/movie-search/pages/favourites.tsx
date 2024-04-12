import styled from 'styled-components';
import colourValues from '../settings/colours';
import { MovieListHeading } from '../src/components/movie-list-heading';
import Link from 'next/link';
import breakpointValues from '../settings/breakpoints';
import { MovieList } from '../src/components/movie-list';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../src/redux/store';
import { removeMovieFromFavourites } from '../src/redux/favourites/favourites';

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

const Favourites = () => {
  const dispatch = useDispatch();
  const { movies: favourites } = useAppSelector((state) => state.Favourites);

  const removeFavouriteMovie = (movie) => {
    dispatch(removeMovieFromFavourites(movie));
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <HeaderWrapper>
            <MovieListHeading />
          </HeaderWrapper>
        </Header>
        <Wrapper>
          {favourites && favourites.length > 0 ? (
            <>
              <Text>Here are all your favourites!</Text>
              <Text>
                Something missing? Find it <Link href="/">here</Link>
              </Text>
              <MovieWrapper>
                <MovieList movies={favourites} />
              </MovieWrapper>
            </>
          ) : (
            <>
              <Text>You have no favourites saved!</Text>
              <Text>
                Go add some <Link href="/">here</Link>
              </Text>
            </>
          )}
        </Wrapper>
      </Container>
    </PageWrapper>
  );
};

export default Favourites;
