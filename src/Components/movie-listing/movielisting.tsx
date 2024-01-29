import './movielisting.scss';
import { useSelector } from 'react-redux';
import {
  getAllMovies,
  getAllSeries,
  getSearch,
} from '../../redux/movies/movieSlice';
import { MovieData, MovieRenderingType } from '../../Types/types';
import MovieRenderComponent from '../../utils/movieRender';
import MovieCardComp from '../movie-card/movieCard';
import { RefObject, createRef, useEffect, useContext } from 'react';
import { SearchContext } from '../../contextAPI/context';
const Movielisting = () => {
  const Movies = useSelector(getAllMovies);
  const Series = useSelector(getAllSeries);
  // const [Movies, setMovies] = useState(movieReturned);
  // const [Series, setSeries] = useState(seriesReturned);
  const searchList = useSelector(getSearch);
  const imgRef: RefObject<HTMLDivElement> = createRef();
  const serRef: RefObject<HTMLDivElement> = createRef();
  const search = useContext(SearchContext)?.search;
  const MovieRender = ({ Details }: MovieRenderingType) => {
    return Details?.Response === 'True' ? (
      <>
        {Details?.Search.map((item: MovieData, index) => {
          return <MovieCardComp key={index} data={item} />;
        })}
      </>
    ) : (
      <p>{Details?.Error}</p>
    );
  };
  useEffect(() => {
    console.log('movielisting ', searchList);
  }, [searchList]);
  return (
    <div className='app__movielisting-container flex-column-gap '>
      {search ? (
        searchList?.movie ? (
          <>
            <MovieRenderComponent
              Title={'Movies'}
              reference={imgRef}
              MovieRender={MovieRender}
              RenderElement={searchList.movie}
            />
            <MovieRenderComponent
              Title={'Series'}
              reference={serRef}
              MovieRender={MovieRender}
              RenderElement={searchList.series}
            />
          </>
        ) : (
          <p>Loading</p>
        )
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
