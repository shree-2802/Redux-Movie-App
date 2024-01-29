import { useEffect } from 'react';
import './movieDetailing.scss';
import { useAppDispatch } from '../../redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  fetchMOrSDetails,
  getDetails,
  removeSelectedMOrSDetails,
} from '../../redux/movies/movieSlice';
import { FaStar, FaCalendar, FaTicketAlt } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import LineDiv from '../line-div/lineDiv';

const MovieDetailing = () => {
  const { id } = useParams();
  const movieDetails = useSelector(getDetails);
  const dispatch = useAppDispatch();
  const filmDetails = ['Director', 'Actors', 'Genre', 'Language', 'Awards'];
  useEffect(() => {
    if (id) dispatch(fetchMOrSDetails(id));

    return () => {
      dispatch(removeSelectedMOrSDetails());
    };
  }, [dispatch, id]);
  return (
    <div>
      {movieDetails && movieDetails.Actors ? (
        <>
          <div className='app__movie-detail-card flex-row-gap'>
            <div className='app__movie-detail-card_left flex-column'>
              <h1>{movieDetails.Title}</h1>
              <p className='flex-row '>
                <span>
                  IMDB.Rating
                  <FaStar color='#FFD700' />: {movieDetails.imdbRating}
                </span>
                <span>
                  IMDB Votes <BiSolidLike />: {movieDetails.imdbVotes}
                </span>
                <span>
                  Runtime
                  <FaTicketAlt />: {movieDetails.Runtime}
                </span>
                <span>
                  Year
                  <FaCalendar />: {movieDetails.Year}
                </span>
              </p>
              <p>{movieDetails.Plot}</p>
              <div className='flex-column-gap'>
                {filmDetails.map((item, index) => {
                  return (
                    <LineDiv
                      key={index}
                      title={item}
                      data={movieDetails[item]}
                    />
                  );
                })}
              </div>
            </div>
            <div className='app__movie-detail-card_right'>
              <img src={movieDetails.Poster} alt={movieDetails.Title} />
            </div>
          </div>
        </>
      ) : (
        <h3 className='app__loading'>Loading...</h3>
      )}
    </div>
  );
};

export default MovieDetailing;
