import React from 'react';
import s from './App.module.css';
import Shop from './containers/Shop';

 const App = () => (
    <div className={s.App}>
      <div className={s.juCo}>
        <Shop />
      </div>
    </div>
 )


export default App;
