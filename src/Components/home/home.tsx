import React, { useEffect} from 'react';
import './home.scss';
import Movielisting from '../movie-listing/movielisting';
import { APIKey } from '../../Common/api/movieAPIKey';
import movieAPI from '../../Common/api/movieAPI';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieAPI
        .get(`?i=tt3896198&apikey=${APIKey}&s=Harry&type=movie`)
        .catch((err) => console.log(err));
      dispatch(addMovies(response?.data));
      console.log(response?.data.Search);
    };
    
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <Movielisting />
    </div>
  );
};

export default Home;
