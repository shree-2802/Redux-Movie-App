import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieCard, jsonData, MovieData, movieSend } from '../../Types/types';
import movieAPI from '../../Common/api/movieAPI';
import { APIKey } from '../../Common/api/movieAPIKey';

export const fetchMovies = createAsyncThunk<any, void>(
  'movies/fetchMovies',
  async () => {
    const response = await movieAPI.get(
      `?&apikey=${APIKey}&s=Harry&type=movie`
    );
    return response.data;
  }
);

export const fetchSeries = createAsyncThunk('series/fetchSeries', async () => {
  const response = await movieAPI.get(
    `?&apikey=${APIKey}&s=Vampire&type=series`
  );
  return response.data;
});
export const fetchMOrSDetails = createAsyncThunk(
  'detail/fetMOrSDetails',
  async (imdbID: string) => {
    const response = await movieAPI.get(`?i=${imdbID}&apikey=${APIKey}`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  series: {},
  MOrSDetails: {} as MovieData,
};

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
    builder.addCase(fetchMOrSDetails.fulfilled, (state, { payload }) => {
      return {
        ...state,
        MOrSDetails: payload,
      };
    });
  },
});

// export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state: jsonData) => {
  return state.movies.movies;
};

export const getAllSeries = (state: jsonData) => {
  return state.movies.series;
};

export const getDetails = (state: movieSend) => {
  return state.movies.MOrSDetails;
};

export default movieSlice.reducer;
