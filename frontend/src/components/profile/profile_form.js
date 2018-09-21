import React, { Component } from 'react'

import { updateUser } from '../../actions/user_actions';

export default class ProfileForm extends Component {
  state = {
    done: false,
    open: false,
    value: this.props.value
  };

  componentWillReceiveProps(next) {
    let { done, value } = this.state;
    if (value === next.value || done) return;

    this.setState({
      done: true,
      value: next.value
    }); 
  }

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

  render() {
    let { open, value } = this.state;

    return (
      <div className='profile-form'>
        <form onSubmit={e => this.submit(e)}>
          {
            !open ? value :
            <input placeholder={value}
              type={this.props.type}
              ref={node => this.fieldNode = node}
              maxLength={this.props.max}
            />
          }
          <button>Update</button>
        </form>
      </div>
    )
  }
}