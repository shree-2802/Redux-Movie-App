import React from 'react';
import { icon } from '../../assets';

import './header.scss';

const Header = () => {
  return (
    <div className='app__header'>
      <h3>Movies App</h3>
      <img src={icon} alt='home' />
    </div>
  );
};

export default Header;
