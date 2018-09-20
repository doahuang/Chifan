import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/routes';
import '../styles/app.css';

import NavBar from './nav/nav_bar';
import ReviewList from './review/review_list/review_list_container';
import Modal from './modal/modal_container';

export default () => {
  return (
    <div className='app'>
      <Modal />
      <Route path='/' component={ NavBar } />
      <ProtectedRoute path='/reviews' component={ ReviewList } />
    </div>
  );
};
