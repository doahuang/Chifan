import React from 'react';
import { Link } from 'react-router-dom';

export default ({ logout }) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/shops'
          onClick={() => window.scrollTo(0, 0)} >
          Shops
        </Link>
      </li>
      <li>
        <Link to='/shops?liked=true'>Liked</Link>
      </li>
      <li>
        <Link to='/reviews'>Reviews</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='#' onClick={() => logout()}>
          Log Out
        </Link>
      </li>
    </ul>
  )
};