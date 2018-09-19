import React, { Component } from 'react'

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState = props.review;

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillUnmount() {
    // clear errors
  }

  componentWillReceiveProps({ review }) {
    if (this.state._id !== review._id) {
      this.setState(review)
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    let review = {
      id: this.state._id,
      rating: Number(this.state.rating),
      text: this.state.text
    };

    if (review.rating === this.initState.rating && 
      review.text === this.initState.text) return this.props.closeModal();

    this.props.submit(review, this.props.closeModal);
  }

  render() {
    const { rating, text } = this.state;

    return (
      <div className='review-form'>
        <h1>{ this.props.formType } Review</h1>
        <form onSubmit={this.submit}>
          <input type='number' placeholder='Rating'
            value={ rating }
            min={1} max={5}
            onChange={this.update('rating')}
            required></input>
          <textarea placeholder='Text'
            value={ text }
            onChange={this.update('text')}></textarea>
          <button>{ this.props.formType }</button>
          <p className='errors'>{ this.props.errors.msg }</p>
        </form>
      </div>
    )
  }
}
