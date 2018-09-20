import React from 'react'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default ({ openModal }) => {
  const currentUser = jwtDecode(localStorage.jwtToken);
  const { name, email, date } = currentUser;

  return (
    <div className='profile'>
      <h1><Link to='/profile'>My Profile</Link></h1>
      <ul>
        <li>
          <b>Name: </b>{name}
          <button onClick={() => openModal('')}>
            Change
          </button>
        </li>
        <li>
          <b>Email: </b>{email}
        </li>
        <li>
          <b>Password: </b>
          <button onClick={() => openModal('')}>
            Change
          </button>
        </li>
        <li>
          <b>Member since: </b>{ new Date(date).toDateString() }
        </li>
      </ul>
    </div>
  )
}
