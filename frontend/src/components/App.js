import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import Greeting from './greeting/greeting_container';
import Signup from './session/signup_form_container';
import Login from './session/login_form_container';
import Review from './review/review_container';

import '../styles/app.css';

export default () => {
  const header = <h1><Link to='/'>Chifan</Link></h1>;

  return (
    <div className='app'>
      { header }
      <Route path='/' component={ Greeting } />
      <AuthRoute path='/signup' component={ Signup } />
      <AuthRoute path='/login' component={ Login } />
      <ProtectedRoute path='/reviews' component={ Review } />
    </div>
  );
};
