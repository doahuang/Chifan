import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Survey from './Survey';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path='/' render={Landing} />
      <Route path='/dashboard' render={Dashboard} />
      <Route path='/survey' component={Survey} />
    </div>
  );
}

export default App;