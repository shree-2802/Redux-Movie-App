import './home.scss';
import Movielisting from '../movie-listing/movielisting';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux';
import { fetchMovies, fetchSeries } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
    console.log('hiii home');
  }, [dispatch]);
  return (
    <div>
      <Movielisting />
    </div>
  );
};

export default Home;
