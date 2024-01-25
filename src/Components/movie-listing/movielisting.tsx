import './movielisting.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { MovieData } from '../../Types/types';
import MovieCard from '../movie-card/movieCard';
import { RefObject, createRef } from 'react';

type scrollElementType = HTMLDivElement | null;

const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const imgRef: RefObject<HTMLDivElement> = createRef();
  const serRef: RefObject<HTMLDivElement> = createRef();
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
  let renderMovies: JSX.Element | JSX.Element[];
  let renderSeries: JSX.Element | JSX.Element[];
  renderMovies =
    Movies.Response === 'True' ? (
      Movies?.Search.map((item: MovieData, index) => {
        return <MovieCard key={index} data={item} />;
      })
    ) : (
      <p>Loading...</p>
    );
  renderSeries =
    series.Response === 'True' ? (
      series.Search.map((series, index) => {
        return <MovieCard key={index} data={series} />;
      })
    ) : (
      <p color='white'>Loading...</p>
    );
  return (
    <div className='app__movielisting-container flex-column-gap '>
      <div>
        <h3>Movies</h3>
        <div className='app__movielisting-container-movieContainer'>
          <div className='app__movie-listing flex-row-gap' ref={imgRef}>
            {renderMovies}
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
            {renderSeries}
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
