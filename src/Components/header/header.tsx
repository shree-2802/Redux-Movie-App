import { useNavigate } from 'react-router-dom';
import { icon } from '../../assets';
import Search from '../search-component/search';
import './header.scss';
import { SearchContext } from '../../contextAPI/context';
import { useContext } from 'react';
import { useAppDispatch } from '../../redux';
import { removeSearch } from '../../redux/movies/movieSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const search = useContext(SearchContext);
  return (
    <div className='app__header'>
      <h3
        style={{ cursor: 'pointer' }}
        onClick={() => {
          dispatch(removeSearch());
          search?.setSearch(false);
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
