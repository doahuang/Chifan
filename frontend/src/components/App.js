import React from 'react';
import '../styles/app.css';

import Modal from './modal/modal_container';
import Nav from './main/nav';
import Body from './main/body';

export default () => {
  return (
    <div className='app'>
      <Modal />
      <Nav />
      <Body />
    </div>
  );
};
