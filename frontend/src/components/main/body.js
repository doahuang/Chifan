import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/routes';

import Profile from '../profile/profile_container';
import Landing from '../splash/landing';
import Shop from '../shop/shop_page_container';

export default () => {
  return (
    <div className='body'>
      <Switch>
        <ProtectedRoute path='/profile' component={Profile} />
        <Route path='/shops' component={Shop} />
        <Route path='/' render={Landing} />
      </Switch>
    </div>
  );
};
