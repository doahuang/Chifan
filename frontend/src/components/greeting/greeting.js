import React from 'react';

import User from './user_greeting';
import Guest from './guest_greeting';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div className='greeting'>
      { 
        currentUser ? 
        <User openModal={openModal} logout={logout} /> :
        <Guest openModal={openModal} />
      }
    </div>
  )
};