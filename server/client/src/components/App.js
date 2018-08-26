import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import Landing from './Landing';
import DashboardContainer from './dashboard/dashboard_container';
import SurveyContainer from './survey/survey_container';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path='/' render={Landing} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route path='/survey' component={SurveyContainer} />
    </div>
  );
}

export default App;