import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import Landing from './Landing';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path='/' render={Landing} />
      <Route path='/dashboard' render={Dashboard} />
      <Route path='/survey' render={() => <h2>Survey</h2>} />
    </div>
  );
}

export default App;