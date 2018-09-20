import React from 'react'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ProfileForm from './profile_form';

export default () => {
  const currentUser = jwtDecode(localStorage.jwtToken);
  const { name, email, date } = currentUser;

  return (
    <div className='profile'>
      <h1><Link to='/profile'>My Profile</Link></h1>
      <ul>
        <li>
          <b>Name: </b>
          <ProfileForm field='Name' value={name} limit={20} />
        </li>
        <li>
          <b>Email: </b>{email}
        </li>
        <li>
          <b>Password: </b>
          <ProfileForm field='Password' />
        </li>
        <li>
          <b>Member since: </b>{ new Date(date).toDateString() }
        </li>
      </ul>
    </div>
  )
}