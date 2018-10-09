import React, { Component } from 'react'

export default class ProfileForm extends Component {
  state = {

  }

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

  updated(value) {
    this.setState({ value, open: false })
  }

  submit(e) {
    e.preventDefault();

    if (!this.state.open) return this.open();

    let { value } = this.refs.fieldNode;
    if (!value || value === this.state.value) return this.close();

    const { id, field } = this.props;
    const user = { id, [field]: value };
    
    this.props.update(user, () => this.updated(value))
  }

  render() {
    const { type, maxLength } = this.props;
    let { open, value } = this.state;

    if (type === 'password') value = '*********'

    return (
      <div className='profile-form'>
        <form onSubmit={e => this.submit(e)}>
          {
            !open ? <span>{ value } </span> :
            <input 
              placeholder={value}
              type={type}
              ref='fieldNode'
              maxLength={maxLength}
            />
          }
          <button>Update</button>
        </form>
      </div>
    )
  }
}