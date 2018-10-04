import React, { Component } from 'react'
import SessionError from '../error/session_error';

export default class SessionForm extends Component {
  state = {
    email: 'demo@chifan',
    password: '123123'
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  submitForm(e, demo) {
    e.preventDefault();

    const { nameNode, emailNode, passwordNode } = this.refs;
    let user = {
      name: nameNode ? nameNode.value : '',
      email: emailNode.value,
      password: passwordNode.value
    };
    
    if (demo) user = this.state;

    this.props.submit(user, this.props.closeModal);
  }

  render() {
    const { formType, shortcut } = this.props;

    return (
      <div className='session-form'>
        { shortcut }
        <form onSubmit={e => this.submitForm(e)}>
          {
            formType === 'Log In' ? null :
            <input placeholder='Name'
              ref='nameNode'
              maxLength={20}
              required
            />
          }
          <input type='email' placeholder='Email'
            ref='emailNode'
            maxLength={20}
            required 
          />
          <input type='password' placeholder='Password'
            ref='passwordNode'
            maxLength={20}
            required 
          />
          <button>{ formType }</button>
        {
          formType === 'Sign Up' ? null :
          <button onClick={e => this.submitForm(e, true)}>
            Demo
          </button>
        }
        </form>
        <SessionError />
      </div>
    )
  }
}
