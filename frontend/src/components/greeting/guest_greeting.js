import React from 'react';
import { Link } from 'react-router-dom';

export default ({ openModal }) => {
  return (
    <ul>
      <li>
        <Link to='/shops'>Shops</Link>
      </li>
      <li>
        <a onClick={() => openModal('help')}>
          Help
        </a>
      </li>
      <li>
        <Link to='#' onClick={() => openModal('signup')}>
          Sign Up
        </Link>
      </li>
      <li>
        <Link to='#' onClick={() => openModal('login')}>
          Log In
        </Link>
      </li>
    </ul>
  )
};