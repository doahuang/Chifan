import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/routes';

import ReviewList from '../review/review_list/review_list_container';
import Profile from '../profile/profile_container';

export default () => {
  return (
    <div className='body'>
      <Switch>
        <ProtectedRoute path='/profile' component={Profile} />
        <ProtectedRoute path='/reviews' component={ReviewList} />
        <Route path='/' render={() => 'This is landing page'} />
      </Switch>
    </div>
  );
};
