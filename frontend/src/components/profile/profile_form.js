import React, { Component } from 'react'

import { updateUser } from '../../actions/user_actions';

export default class ProfileForm extends Component {
  state = {
    open: false
  };

  submit(e) {
    e.preventDefault();

    if (!this.state.open)
      return this.setState({ open: true });
    
    let value = this.fieldNode.value;
    
    if (!value || this.state.value === value)
      return this.setState({ open: false });

    const user = {
      id: this.props.id,
      [this.props.field]: value
    };
      
    updateUser(user)
      .then(() => this.setState({ 
        value,
        open: false 
      }));
  }

  componentWillReceiveProps(next) {
    if (this.state.value !== next.value) 
      this.setState({ value: next.value });
  }

  render() {
    const { open, value } = this.state;

    return (
      <div className='profile-form'>
        <form onSubmit={e => this.submit(e)}>
          {
            open ?
            <input placeholder={value}
              ref={node => this.fieldNode = node}
              maxLength={this.props.max}
            /> : value
          }
          <button>Update</button>
        </form>
      </div>
    )
  }
}