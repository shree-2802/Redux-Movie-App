import './movielisting.scss';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movies/movieSlice';
import { MovieData } from '../../Types/types';
import MovieCard from '../movie-card/movieCard';

const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  let renderMovies: JSX.Element | JSX.Element[];

  renderMovies =
    Movies.Response === 'True' ? (
      (console.log('true'),
      Movies?.Search.map((item: MovieData, index) => {
        return <MovieCard key={index} data={item} />;
      }))
    ) : (
      <h1>Error</h1>
    );
  return (
    <div className='app__movie-listing flex-row_center--gap '>
      {renderMovies}
    </div>
  );
};

export default Movielisting;
