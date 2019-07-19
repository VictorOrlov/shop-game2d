import React from 'react';
import s from './Rectangle.module.css';

const Rectangle = ({children}) => (
  <div className={s.rectangle}>
    {children}
  </div>
);

export default Rectangle;