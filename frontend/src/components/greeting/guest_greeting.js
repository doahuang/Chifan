import React from 'react';
import { Link } from 'react-router-dom';

export default ({ openModal }) => {
  return (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/help'>Help</Link>
      </li>
      <li>
        <Link to='/login' 
          onClick={() => openModal('login')}>
          Log In
        </Link>
      </li>
      <li>
        <Link to='/signup' 
          onClick={() => openModal('signup')}>
          Sign Up
        </Link>
      </li>
    </ul>
  )
};