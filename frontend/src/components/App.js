import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting/greeting_container';

import '../styles/app.css';

export default () => {
  return (
    <div className='app'>
      <h1><Link to='/'>Chifan</Link></h1>
      <Greeting />
    </div>
  );
};
