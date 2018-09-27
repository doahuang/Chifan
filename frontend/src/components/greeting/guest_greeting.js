import React from 'react';
import { Link } from 'react-router-dom';

export default ({ openModal }) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <a onClick={() => openModal('signup')}>
          Sign Up
        </a>
      </li>
      <li>
        <a onClick={() => openModal('login')}>
          Log In
        </a>
      </li>
    </ul>
  )
};