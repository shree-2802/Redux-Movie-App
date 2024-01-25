import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../index';
import movieAPI from '../../Common/api/movieAPI';
import { APIKey } from '../../Common/api/movieAPIKey';
import { MovieCard, MovieData, initialStateType, searchType } from '../../Types/types';

export const fetchMovies = createAsyncThunk<MovieCard, void>(
  'movies/fetchMovies',
  async () => {
    const response = await movieAPI.get(
      `?&apikey=${APIKey}&s=Harry&type=movie`
    );
    return response.data;
  }
);

export const fetchSeries = createAsyncThunk<MovieCard, void>(
  'series/fetchSeries',
  async () => {
    const response = await movieAPI.get(
      `?&apikey=${APIKey}&s=Vampire&type=series`
    );
    return response.data;
  }
);
export const fetchMOrSDetails = createAsyncThunk(
  'detail/fetMOrSDetails',
  async (imdbID: string) => {
    const response = await movieAPI.get(`?i=${imdbID}&apikey=${APIKey}`);
    console.log(response);
    return response.data;
  }
);

export const fetchSearch = createAsyncThunk(
  'movies/search',
  async (searchText: string) => {
    const movieResponse = await movieAPI.get(
      `?apikey=${APIKey}&s=${searchText}&type=movie`
    );
    const seriesResponse = await movieAPI.get(
      `?apikey=${APIKey}&s=${searchText}&type=series`
    );
    return { movies: movieResponse.data, series: seriesResponse.data };
  }
);
const initialState: initialStateType = {
  movies: {} as MovieCard,
  series: {} as MovieCard,
  MOrSDetails: {} as MovieData | null,
  search: {} as searchType,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMOrSDetails: (state) => {
      return {
        ...state,
        MOrSDetails:null
      };
    },
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
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      return {
        ...state,
        search: {
          movie: payload.movies,
          series: payload.series,
        },
      };
    });
  },
});

export const { removeSelectedMOrSDetails } = movieSlice.actions;

export const getAllMovies = (state: RootState) => {
  return state.movies.movies;
};

export const getAllSeries = (state: RootState) => {
  return state.movies.series;
};

export const getDetails = (state: RootState) => {
  return state.movies.MOrSDetails;
};

export const getSearch = (state: RootState) => {
  return state.movies.search;
};
export default movieSlice.reducer;
