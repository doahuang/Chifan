import React from 'react';
import { Link, Route } from 'react-router-dom';
import Greeting from './greeting/greeting_container';
import Signup from './session/signup_form_container';
import Login from './session/login_form_container';

import '../styles/app.css';

export default () => {
  const header = <h1><Link to='/'>Chifan</Link></h1>;

  return (
    <div className='app'>
      { header }
      <Route exact path='/' component={ Greeting } />
      <Route path='/signup' component={ Signup } />
      <Route path='/login' component={ Login } />
    </div>
  );
};
