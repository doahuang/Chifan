import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h1>Dashboard</h1>;
const Landing = () => <h1>Landing</h1>;
const Survey = () => <h1>Survey</h1>;

const App = () => (
  <div>
    <Header />
    <Route exact path='/' render={Landing} />
    <Route exact path='/surveys' render={Dashboard} />
    <Route path='/surveys/new' render={Survey} />
  </div>
);

export default App;