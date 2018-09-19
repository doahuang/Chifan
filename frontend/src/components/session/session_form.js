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

  submitForm(e) {
    e.preventDefault();
    
    const { submit, closeModal } = this.props;
    submit(this.state, closeModal);
  }

  render() {
    const { errors, formType, shortcut, submit, closeModal } = this.props;

    const Name = formType => {
      if (formType === 'Log In') return null;

      return (
        <input placeholder='Name' 
          onChange={this.update('name')} 
          required></input>
      )
    }

    const Demo = formType => {
      if (formType === 'Sign Up') return null;
      let user = { email: 'demo@demo', password: '123123' };
      
      return (
        <button onClick={e => {
          e.preventDefault();
          submit(user, closeModal);
        }}>Demo</button>
      )
    }

    return (
      <div className='session-form'>
        { shortcut }
        <form onSubmit={this.submitForm}>
          { Name(formType) }
          <input type='email' placeholder='Email'
            onChange={this.update('email')} 
            required></input>
          <input type='password' placeholder='Password'
            onChange={this.update('password')} 
            required></input>
          <button>{ formType }</button>
          { Demo(formType) }
        </form>
        <p className='errors'>{ errors.msg }</p>
      </div>
    )
  }
}
