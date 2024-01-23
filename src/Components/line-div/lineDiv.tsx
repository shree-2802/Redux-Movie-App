import React from 'react';
import { lineDivType } from '../../Types/types';
import './lineDiv.scss';
const LineDiv: React.FC<lineDivType> = ({ title, data }) => {
  return (
    <div className='app__lineComponent'>
      <h5>{title}</h5>
      <p>{data}</p>
    </div>
  );
};

export default LineDiv;
