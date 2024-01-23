import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../Types/types';
import movieAPI from '../../Common/api/movieAPI';
import { APIKey } from '../../Common/api/movieAPIKey';

export const fetchMovies = createAsyncThunk<any, void>(
  'movies/fetchMovies',
  async () => {
    const response = await movieAPI.get(
      `?i=tt3896198&apikey=${APIKey}&s=Harry&type=movie`
    );
    return response.data;
  }
);

export const fetchSeries = createAsyncThunk('series/fetchSeries', async () => {
  const response = await movieAPI.get(
    `?i=tt3896198&apikey=${APIKey}&s=Vampire&type=series`
  );
  return response.data;
});

const initialState = {
  movies: {},
  series: {},
} as RootState;

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, movies: payload };
    });
    builder.addCase(fetchMovies.pending, () => {
      console.log('pending');
    });
    builder.addCase(fetchMovies.rejected, () => {
      console.log('rejected');
    });
    builder.addCase(fetchSeries.fulfilled, (state, { payload }) => {
      return {
        ...state,
        series: payload,
      };
    });
  },
});

// export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => {
  return state.movies.movies;
};
export const getAllSeries = (state: RootState) => {
  console.log('series ', state);
  return state.movies.series;
};
export default movieSlice.reducer;
