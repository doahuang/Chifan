import React from 'react';
import { Link } from 'react-router-dom';

const User = (user, logout) => {
  return (
    <ul>
      <li>Welcome, <b>{ user.name }</b></li>
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
        <span> or </span>
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