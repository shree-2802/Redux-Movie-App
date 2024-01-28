import React from 'react';
import { MovieRenderingType, MovieCard } from '../Types/types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { scroll } from './scroll';
export type MovieJSXRender = {
  Title: string;
  reference: React.RefObject<HTMLDivElement>;
  MovieRender: React.FC<MovieRenderingType>;
  RenderElement: MovieCard|undefined;
};

const MovieRender: React.FC<MovieJSXRender> = ({
  Title,
  reference,
  MovieRender,
  RenderElement,
}) => {
  return (
    <div>
      <h3>{Title}</h3>
      <div className='app__movielisting-container-movieContainer'>
        <div className='app__movie-listing flex-row-gap' ref={reference}>
          <MovieRender Details={RenderElement} />
        </div>
        <div>
          <FaArrowLeft
            color='white'
            className='app-button'
            onClick={() => scroll('left', reference)}
          />
          <FaArrowRight
            color='white'
            className='app-button'
            onClick={() => scroll('right', reference)}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieRender;
