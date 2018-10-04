import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/routes';

import '../styles/app.scss';

import Modal from './modal/modal_container';
import Nav from './nav/nav';
import Profile from './profile/profile_container';
import Landing from './splash/landing';
import Shop from './shop/shop_page_container';

export default () => {
  return (
    <div className='app'>
      <Modal />
      <Nav />
      <Switch>
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/shops' component={Shop} />
        <Route path='/' render={Landing} />
      </Switch>
    </div>
  );
};
