import React from 'react';
import { Route } from 'react-router-dom';

import Modal from './Modal';
import HeaderContainer from './header/header_container';
import Landing from './Landing';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderContainer />
      <Route exact path='/' render={Landing} />
      <Route path='/dashboard' component={DashboardContainer} />
    </div>
  );
}

export default App;