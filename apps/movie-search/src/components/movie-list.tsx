import colourValues from 'apps/movie-search/settings/colours';
import styled from 'styled-components';
import { Movie } from '../types/types';
import { AddFavourite } from './add-favourite';
import { useAppSelector } from '../redux/store';
import { RemoveFavourite } from './remove-favourite';
import { useDispatch } from 'react-redux';
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from '../redux/favourites/favourites';

interface Props {
  movies: Movie[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: calc(100% - 20px);
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 20px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  color: ${colourValues.white};
`;

const MovieWrapper = styled.div`
  position: relative;
  transition: transform 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  :hover ${Overlay} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 430px;
  width: 280px;
  min-height: 430px;
  min-width: 280px;
  display: block;
  margin: 10px;
  border: 1px solid black;
`;

const Link = styled.a``;

export const MovieList = ({ movies }: Props) => {
  const dispatch = useDispatch();
  const { movies: favourites } = useAppSelector((state) => state.Favourites);

  const addOrRemoveFavourite = (movie) => {
    if (favourites.some((favourite) => favourite.imdbID === movie.imdbID)) {
      dispatch(removeMovieFromFavourites(movie));
    } else {
      dispatch(addMovieToFavourites(movie));
    }
  };

  return (
    <Wrapper>
      {movies &&
        movies.map((movie, i) => (
          <MovieWrapper key={i}>
            <Link
              href={'https://www.imdb.com/title/' + movie.imdbID}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={movie.Poster} alt={movie.Title} />
            </Link>
            <Overlay onClick={() => addOrRemoveFavourite(movie)}>
              {favourites.some(
                (favourite) => favourite.imdbID === movie.imdbID
              ) ? (
                <RemoveFavourite />
              ) : (
                <AddFavourite />
              )}
            </Overlay>
          </MovieWrapper>
        ))}
    </Wrapper>
  );
};
