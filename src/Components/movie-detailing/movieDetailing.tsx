import React, { useEffect } from 'react';
import './movieDetailing.scss';
import { useAppDispatch } from '../../redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchMOrSDetails, getDetails } from '../../redux/movies/movieSlice';

const MovieDetailing = () => {
  const { id } = useParams();
  const movieDetails = useSelector(getDetails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) dispatch(fetchMOrSDetails(id));
  }, [dispatch, id]);
console.log(movieDetails);
  return <div className='app__movie-detail-card'>
    <div></div>
  </div>;
};

export default MovieDetailing;
