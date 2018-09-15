import React, { Component } from 'react'

export default class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUnmount() {
    //clear errors
  }

  updateInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  submitForm(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    const { errors, formType } = this.props;

    const Name = formType => {
      if (formType === 'Log In') return null;

      return (
        <label>
          Name: <input onChange={this.updateInput('name')} required></input>
          <span> </span>
        </label>
      )
    }

    return (
      <div>
        <h2>{ formType }</h2>
        <form onSubmit={this.submitForm}>
          { Name(formType) }
          <label>
            Email: <input type='email' onChange={this.updateInput('email')} required></input>
            <span> </span>
          </label>
          <label>
            Password: <input type='password' onChange={this.updateInput('password')} required></input>
            <span> </span>
          </label>
          <button>{ formType }</button>
        </form>
        <p></p>
        <p>{ errors.msg }</p>
      </div>
    )
  }
}
