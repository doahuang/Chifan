import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from '../nav/nav_link'

export default ({ openModal }) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <NavLink actions={() => openModal('signup')}>
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink actions={() => openModal('login')}>
          Log In
        </NavLink>
      </li>
    </ul>
  )
};