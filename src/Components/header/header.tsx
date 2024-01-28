import { useNavigate } from 'react-router-dom';
import { icon } from '../../assets';
import Search from '../search-component/search';
import { SearchContext } from '../../context/Context';
import { useContext } from 'react';
import './header.scss';
import { useAppDispatch } from '../../redux';
import { removeSearch } from '../../redux/movies/movieSlice';

const Header = () => {
  const navigate = useNavigate();
  const value = useContext(SearchContext);
  const dispatch = useAppDispatch();
  return (
    <div className='app__header'>
      <h3
        style={{ cursor: 'pointer' }}
        onClick={() => {
          value?.setSearch(null);
          dispatch(removeSearch());
          navigate('/');
        }}
      >
        Movies App
      </h3>
      <Search />
      <img src={icon} alt='home' />
    </div>
  );
};

export default Header;
