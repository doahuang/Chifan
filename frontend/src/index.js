import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configStore from './components/store';

import jwtDecode from 'jwt-decode';
import * as sessionAPI from './util/session_api';
window.a = sessionAPI;

const render = () => {
  let store = configStore();
  window.s = store;

  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    let action = sessionAPI.setCurrentUser(decoded);
    store.dispatch(action);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      action = sessionAPI.logoutUser();
      store.dispatch(action);
    }
  }

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/root', () => render());
}