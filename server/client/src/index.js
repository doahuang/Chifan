import React from 'react';
import ReactDOM from'react-dom';
import Root from './components/Root';
import configStore from './store/store';

import './css/master.css';

document.addEventListener('DOMContentLoaded', () => {
  const store = configStore();
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});