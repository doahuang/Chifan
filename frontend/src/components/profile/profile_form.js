import React, { Component } from 'react'

export default class ProfileForm extends Component {
  state = {
    value: this.props.value,
    open: false
  };

  update(e) {
    this.setState({ value: e.currentTarget.value })
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open, value } = this.state;
    const { field, limit } = this.props;

    return (
      <div className='profile-form'>
        <form onSubmit={e => e.preventDefault()}>
          {
            !open ? value :
            <input placeholder={field}
              value={value}
              onChange={e => this.update(e)}
              maxLength={limit}
              required
            />
          }
          <button onClick={() => this.toggle()}>
            { open ? 'Update' : 'Change' }
          </button>
        </form>
      </div>
    )
  }
}