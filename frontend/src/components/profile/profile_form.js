import React, { Component } from 'react'

import { updateUser } from '../../actions/user_actions'

export default class ProfileForm extends Component {
  state = {

  }

  action = updateUser;

  componentWillReceiveProps(next) {
    let { done, value } = this.state;
    if (value === next.value || done) return;

    this.setState({ done: true, value: next.value });
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false })
  }

  submit(e) {
    e.preventDefault();

    if (!this.state.open) return this.open();

    let value = this.fieldNode.value;
    if (!value || value === this.state.value) return this.close();

    const { id, field } = this.props;
    const user = { id, [field]: value };
    
    this.action(user)
      .then(() => this.setState({ value, open: false }))
      .catch(this.close());
  }

  render() {
    const { type, maxLength } = this.props;
    let { open, value } = this.state;

    return (
      <div className='profile-form'>
        <form onSubmit={e => this.submit(e)}>
          {
            !open ? value :
            <input 
              placeholder={value}
              type={type}
              ref={node => this.fieldNode = node}
              maxLength={maxLength}
            />
          }
          <button>Update</button>
        </form>
      </div>
    )
  }
}