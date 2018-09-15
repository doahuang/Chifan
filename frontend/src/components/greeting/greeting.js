import React from 'react';
import { Link } from 'react-router-dom';

const User = (user, logout) => {
  return (
    <div>
      <ul>
        <li>Welcome, <b>{ user.name }</b></li>
        <li>
          <Link to='/' onClick={() => logout()}>Log Out</Link>
        </li>
      </ul>
    </div>
  )
};

const Visitor = (login) => {
  const demo = { email: 'demo', password: '123' };

  return (
    <div>
      <ul>
        <li>
          <Link to='/login'>Log In</Link>
          <span> or </span>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/' onClick={() => login(demo)}>Demo</Link>
        </li>
      </ul>
    </div>
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