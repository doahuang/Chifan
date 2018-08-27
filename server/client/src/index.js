import React from 'react';
import ReactDOM from'react-dom';
import Root from './components/Root';
import configStore from './store/store';

import './css/master.css';

import axios from 'axios';
window.a = axios;

document.addEventListener('DOMContentLoaded', () => {
  const store = configStore();
  window.s = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});