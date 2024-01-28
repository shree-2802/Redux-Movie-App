import './movielisting.scss';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { MovieCard, MovieData, MovieRenderingType } from '../../Types/types';
import MovieRenderComponent from '../../utils/movieRender';
import MovieCardComp from '../movie-card/movieCard';
import { RefObject, createRef, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/Context';
const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const Series = useSelector(getAllSeries);
  // const [Movies, setMovies] = useState(movieReturned);
  // const [Series, setSeries] = useState(seriesReturned);

  const imgRef: RefObject<HTMLDivElement> = createRef();
  const serRef: RefObject<HTMLDivElement> = createRef();

  const value = useContext(SearchContext);

  const MovieRender = ({ Details }: MovieRenderingType) => {
    return Details?.Response === 'True' ? (
      <>
        {Details?.Search.map((item: MovieData, index) => {
          return <MovieCardComp key={index} data={item} />;
        })}
      </>
    ) : (
      <p>Loading...</p>
    );
  };
  useEffect(() => {
    console.log('movielisting');
  }, [value?.search]);
  return (
    <div className='app__movielisting-container flex-column-gap '>
      {value?.search?.movie ? (
        <>
          <MovieRenderComponent
            Title={'Movies'}
            reference={imgRef}
            MovieRender={MovieRender}
            RenderElement={value.search.movie}
          />
          <MovieRenderComponent
            Title={'Series'}
            reference={serRef}
            MovieRender={MovieRender}
            RenderElement={value.search.series}
          />
        </>
      ) : (
        <>
          <MovieRenderComponent
            Title={'Movies'}
            reference={imgRef}
            MovieRender={MovieRender}
            RenderElement={Movies}
          />
          <MovieRenderComponent
            Title={'Series'}
            reference={serRef}
            MovieRender={MovieRender}
            RenderElement={Series}
          />
        </>
      )}
    </div>
  );
};

export default Movielisting;
