import './movielisting.scss';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { MovieData } from '../../Types/types';
import MovieCard from '../movie-card/movieCard';

const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies: JSX.Element | JSX.Element[];
  let renderSeries: JSX.Element | JSX.Element[];
  renderMovies =
    Movies.Response === 'True' ? (
      (console.log('true'),
      Movies?.Search.map((item: MovieData, index) => {
        return <MovieCard key={index} data={item} />;
      }))
    ) : (
      <h1>{Movies.Error}</h1>
    );
  renderSeries =
    series.Response === 'True' ? (
      series.Search.map((series, index) => {
        return <MovieCard key={index} data={series} />;
      })
    ) : (
      <h1>{series.Error}</h1>
    );
  return (
    <div className='app__movielisting-container flex-column_center--gap '>
      <div>
        <h3>Movies</h3>
        <div className='app__movie-listing flex-row_center--gap'>
          {renderMovies}
        </div>
      </div>
      <div>
        <h3>Series</h3>
        <div className='app__movie-listing flex-row_center--gap'>
          {renderSeries}
        </div>
      </div>
    </div>
  );
};

export default Movielisting;
