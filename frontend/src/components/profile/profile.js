import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ProfileForm from './profile_form';
import { getUser } from '../../actions/user_actions'

export default class Profile extends Component {
  state = {

  }

  componentDidMount() {
    getUser(this.props.id).then(user => this.setState(user))
  }

  render() {
    let { id, name, email, date } = this.state;
    const demo = 'demo@chifan';

    return (
      <div className='profile'>
        <h1><Link to='/profile'>My Profile</Link></h1>
        <ul>
          <li>
            <b>Name: </b>
            <ProfileForm id={id} field='name' 
              value={name} max={20} />
          </li>
          <li>
            <b>Email: </b>
            {
              email === demo ? demo :
              <ProfileForm id={id} field='email'
                value={email} type='email' max={20} />
            }
          </li>
          <li>
            <b>Member since: </b>{ new Date(date).toDateString() }
          </li>
        </ul>
      </div>
    )
  }
}