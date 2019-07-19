import React from 'react';
import s from './App.module.css';
import Shop from './containers/Shop';
import HeroStats from './containers/HeroStats';

 const App = () => (
    <div className={s.App}>
      <div className={s.juCo}>
        <Shop />
        <HeroStats />
      </div>
    </div>
 )


export default App;
