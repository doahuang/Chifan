import React from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/routes';
import Greeting from './greeting/greeting_container';
import ReviewList from './review/review_list_container';
import Modal from './modal/modal_container';

import '../styles/app.css';

export default () => {
  const header = <h1><Link to='/'>Chifan</Link></h1>;

  return (
    <div className='app'>
      { header }
      <Modal />
      <Route path='/' component={ Greeting } />
      <ProtectedRoute path='/reviews' component={ ReviewList } />
    </div>
  );
};
