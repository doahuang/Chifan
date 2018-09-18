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

const Visitor = (login) => {
  return (
    <ul>
      <li>
        <Link to='/login'>Log In</Link> / <Link to='/signup'>Sign Up</Link>
      </li>
    </ul>
  )
};

export default ({ currentUser, logout, login }) => {
  return (
    <div className='greeting'>
      { 
        currentUser ? 
        User(currentUser, logout) : 
        Visitor(login)
      }
    </div>
  )
};