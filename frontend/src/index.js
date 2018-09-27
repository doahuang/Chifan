import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configStore from './components/store';

import jwtDecode from 'jwt-decode';
import { setCurrentUser, logoutUser, setAuthToken } from './util/session_api';

import yelp from './actions/yelp_actions';
window.yelp = yelp;

document.addEventListener('DOMContentLoaded', () => render());

const render = () => {
  let store = configStore();
  window.s = store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
    }
  }

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./components/root', () => render());
}