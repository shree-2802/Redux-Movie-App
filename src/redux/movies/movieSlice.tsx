import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../Types/types';

const initialState = {
  movies: {},
} as RootState;

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => {
  return state.movies.movies;
};
export default movieSlice.reducer;
