import React from 'react';
import s from './Stats.module.css';

const Stats = ({ name, children }) => (
  <div className={s.wrapper}>
    <div className={s.heroName}>
      <p>Name : <span>{name}</span></p>
    </div>
    <div className={s.stats}>
      <span>Stats</span>
      {children}
    </div>
  </div>
);

export default Stats;