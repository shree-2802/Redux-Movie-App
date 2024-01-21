import React from 'react';
import './footer.scss';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer--copyrights flex-column_center--gap'>
        <p>API by Brian Fritz.</p>
        <p>All content licensed under CC BY-NC 4.0.</p>
        <p>This site is not endorsed by or affiliated with IMDb.com.</p>
        <div className='flex-row_center--gap'>
          <FaInstagram fontSize={27} />
          <FaTwitter fontSize={27} />
          <FaFacebook fontSize={27} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
