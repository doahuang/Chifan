import React, { Component } from 'react'

export default class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUnmount() {
    //clear errors
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  submitForm(e, user = this.state) {
    e.preventDefault();
    this.props.submit(user, this.props.closeModal);
  }

  render() {
    const { errors, formType, shortcut } = this.props;

    const Name = formType => {
      if (formType === 'Log In') return null;

      return (
        <input placeholder='Name' 
          onChange={this.update('name')} 
          maxLength={20}
          required></input>
      )
    }

    const Demo = formType => {
      if (formType === 'Sign Up') return null;
      let user = { email: 'demo@demo', password: '123123' };
      
      return (
        <button onClick={e => this.submitForm(e, user)}>
          <b>Demo</b>
        </button>
      )
    }

    return (
      <div className='session-form'>
        { shortcut }
        <form onSubmit={this.submitForm}>
          { Name(formType) }
          <input type='email' placeholder='Email'
            onChange={this.update('email')} 
            maxLength={20}
            required></input>
          <input type='password' placeholder='Password'
            onChange={this.update('password')} 
            maxLength={10}
            required></input>
          <button>{ formType }</button>
          { Demo(formType) }
        </form>
        <p className='errors'>{ errors.msg }</p>
      </div>
    )
  }
}
