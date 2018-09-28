import React, { Component } from 'react'

import ProfileForm from './profile_form_container';
import UiError from '../error/ui_error';

import { getUser } from '../../actions/user_actions'

export default class Profile extends Component {
  state = {

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    getUser(this.props.id).then(user => this.setState(user.data))
  }

  render() {
    let { _id, name, email, date, password } = this.state;
    const id = _id;
    const demo = 'demo@chifan';

    return (
      <div className='profile'>
        <ul>
          <li>
            <b>Name: </b>
            <ProfileForm 
              id={id} field='name' 
              value={name} maxLength={20} 
            />
          </li>
          <li>
            <b>Email: </b>
            {
              email === demo ? demo :
              <ProfileForm 
                id={id} field='email' type='email'
                value={email} maxLength={20}
              />
            }
          </li>
          <li>
            <b>Password: </b>
            {
              email === demo ? '*********' :
              <ProfileForm
                id={id} field='password' type='password'
                value={password} maxLength={20}
              />
            }
          </li>
          <li>
            <b>Member since: </b>{ new Date(date).toDateString() }
          </li>
          <li>
            <UiError />
          </li>
        </ul>
      </div>
    )
  }
}