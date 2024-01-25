import React from 'react';
import './movieCard.scss';
import { MovieData } from '../../Types/types';
import { useNavigate } from 'react-router-dom';

const MovieCard: React.FC<{ data: MovieData }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className='app__movie-card'
      onClick={() => {
        navigate(`/movie/${data.imdbID}`);
      }}
    >
      <div>
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div>
        <h3>{data.Title}</h3>
        <p>{data.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
