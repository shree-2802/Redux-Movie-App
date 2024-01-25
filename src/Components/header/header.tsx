import { icon } from '../../assets';
import Search from '../search-component/search';
import './header.scss';

const Header = () => {
  return (
    <div className='app__header'>
      <h3>Movies App</h3>
      <Search />
      <img src={icon} alt='home' />
    </div>
  );
};

export default Header;
