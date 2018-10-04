import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from '../nav/nav_link'

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
        <NavLink actions={() => logout()}>
          Log Out
        </NavLink>
      </li>
    </ul>
  )
};