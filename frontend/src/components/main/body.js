import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/routes';

import ReviewList from '../review/review_list/review_list_container';
import Profile from '../profile/profile_container';
import Landing from '../splash/landing';
import Shop from '../shop/shop_page_container';

export default () => {
  return (
    <div className='body'>
      <Switch>
        <Route path='/shops' component={Shop} />
        <ProtectedRoute path='/reviews' component={ReviewList} />
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/' render={Landing} />
      </Switch>
    </div>
  );
};
