import React from 'react';
import { Link } from 'react-router-dom';

export default ({ logout }) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <a onClick={() => logout()}>
          Log Out
        </a>
      </li>
    </ul>
  )
};