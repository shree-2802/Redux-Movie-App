import './movielisting.scss';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { MovieData } from '../../Types/types';
import MovieCard from '../movie-card/movieCard';

const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log(series);
  let renderMovies: JSX.Element | JSX.Element[];

  renderMovies =
    Movies.Response === 'True' ? (
      (console.log('true'),
      Movies?.Search.map((item: MovieData, index) => {
        return <MovieCard key={index} data={item} />;
      }))
    ) : (
      <h1>{Movies.Error}</h1>
    );
  // renderSeries=seriesRespon
  return (
    <div className='app__movie-listing flex-row_center--gap '>
      {renderMovies}
    </div>
  );
};

export default Movielisting;
