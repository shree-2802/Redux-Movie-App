import React, { useEffect } from 'react';
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
  console.log(movieDetails.length);
  return (
    <div className='app__movie-detail-card flex-row'>
      {!movieDetails.Actors ? (
        <div>Loading...</div>
      ) : (
        <>
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
                  <LineDiv key={index} title={item} data={movieDetails[item]} />
                );
              })}
            </div>
          </div>
          <div className='app__movie-detail-card_right'>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailing;

// Actors:"Daniel Radcliffe, Emma Watson, Rupert Grint"
// Awards:"Nominated for 1 Oscar. 13 wins & 46 nominations total"
// BoxOffice:"$290,469,928"
// Country:"United Kingdom, United States"
// DVD:"01 Jan 2008"
// Director:"Mike Newell"
// Genre:"Adventure, Family, Fantasy"
// Language:"English, French, Latin"
// Metascore:"81"
// Plot:"Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares."
// Poster:"https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
// Production:"N/A"
// Rated:"PG-13"
// Ratings:(3) [{…}, {…}, {…}]
// Released:"18 Nov 2005"
// Response:"True"
// Runtime:"157 min"
// Title:"Harry Potter and the Goblet of Fire"
// Type:"movie"
// Website:"N/A"
// Writer:"Steve Kloves, J.K. Rowling"
// Year:"2005"
// imdbID:"tt0330373"
// imdbRating:"7.7"
// imdbVotes
