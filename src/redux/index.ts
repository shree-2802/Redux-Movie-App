import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { movies: moviesReducer },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootSTATE = ReturnType<typeof store.getState>;
