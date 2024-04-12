import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../types/types';

export type Favourites = {
  movies: Movie[];
};

const initialState: Favourites = {
  movies: [],
};

const FavouritesSlices = createSlice({
  name: 'Favourites',
  initialState,
  reducers: {
    addMovieToFavourites: (state, action: PayloadAction<Movie>) => {
      console.log('debug: ', action.payload);
      state.movies.push(action.payload);
    },
    removeMovieFromFavourites: (state, action: PayloadAction<Movie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

const { actions, reducer } = FavouritesSlices;
export const { addMovieToFavourites, removeMovieFromFavourites } = actions;
export const FavouritesReducer = reducer;
