import './movielisting.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { MovieCard, MovieData } from '../../Types/types';
import MovieCardComp from '../movie-card/movieCard';
import { RefObject, createRef, useContext } from 'react';
import { SearchContext } from '../../context/Context';
// import { RootState } from '../../Types/types';

type scrollElementType = HTMLDivElement | null;

export type MovieRenderingType = {
  Details: MovieCard;
};
const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const imgRef: RefObject<HTMLDivElement> = createRef();
  const serRef: RefObject<HTMLDivElement> = createRef();

  const value = useContext(SearchContext);

  const scroll = (direction: string, ref: RefObject<HTMLDivElement>) => {
    const scrollEle: scrollElementType = ref.current;
    if (scrollEle) {
      const scrollDirection = direction === 'left' ? -310 : 310;
      scrollEle.scrollTo({
        left: scrollEle.scrollLeft + scrollDirection,
        behavior: 'smooth',
      });
    }
  };

  const MovieRender = ({ Details }: MovieRenderingType) => {
    return Details.Response === 'True' ? (
      <>
        {Details?.Search.map((item: MovieData, index) => {
          return <MovieCardComp key={index} data={item} />;
        })}
      </>
    ) : (
      <p>Loading...</p>
    );
  };

  return (
    <div className='app__movielisting-container flex-column-gap '>
      <div>
        <h3>Movies</h3>
        <div className='app__movielisting-container-movieContainer'>
          <div className='app__movie-listing flex-row-gap' ref={imgRef}>
            <MovieRender Details={Movies} />
          </div>
          <div>
            <FaArrowLeft
              color='white'
              className='app-button'
              onClick={() => scroll('left', imgRef)}
            />
            <FaArrowRight
              color='white'
              className='app-button'
              onClick={() => scroll('right', imgRef)}
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Series</h3>
        <div className='app__movielisting-container-movieContainer'>
          <div className='app__movie-listing flex-row-gap' ref={serRef}>
            <MovieRender Details={series}/>
          </div>
          <div>
            <FaArrowLeft
              color='white'
              className='app-button'
              onClick={() => scroll('left', serRef)}
            />
            <FaArrowRight
              color='white'
              className='app-button'
              onClick={() => scroll('right', serRef)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movielisting;
