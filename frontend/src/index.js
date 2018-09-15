import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import jwtDecode from 'jwt-decode';
import * as sessionAPI from './util/session_api';
window.a = sessionAPI;

const render = () => {
  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    const currentUser = sessionAPI.setCurrentUser(decoded);
    console.log(currentUser);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) sessionAPI.logoutUser();
  }

  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) module.hot.accept('./App', () => render());

registerServiceWorker();
