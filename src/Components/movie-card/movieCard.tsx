import React from 'react';
import './movieCard.scss';
import { MovieData } from '../../Types/types';

const MovieCard: React.FC<{ data: MovieData }> = ({ data }) => {
  return (
    <div className='app__movie-card'>
      <div>
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div>
        <h3>{data.Title}</h3>
        <p>{data.Year}</p>
        <p>{data.imdbID}</p>
      </div>
    </div>
  );
};

export default MovieCard;
