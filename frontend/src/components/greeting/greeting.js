import React from 'react';
import { Link } from 'react-router-dom';

const User = (user, logout) => {
  return (
    <ul>
      <h2>Hi, { user.name }</h2>
      <li>
        <Link to='/reviews'>Reviews</Link>
      </li>
      <li>
        <Link to='/' onClick={() => logout()}>Log Out</Link>
      </li>
    </ul>
  )
};

const Visitor = openModal => {
  return (
    <ul>
      <li>
        <Link to='/login' onClick={() => openModal('login')}>Log In</Link>
      </li>
      <li>
        <Link to='/signup' onClick={() => openModal('signup')}>Sign Up</Link>
      </li>
    </ul>
  )
};

export default ({ currentUser, logout, openModal }) => {
  return (
    <div className='greeting'>
      { 
        currentUser ? 
        User(currentUser, logout) :
        Visitor(openModal)
      }
    </div>
  )
};