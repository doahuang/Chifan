import React, { Component } from 'react'
import UiError from '../../error/ui_error';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.review._id,
      rating: props.review.rating,
      text: props.review.text
    };
  }

  submit(e) {
    e.preventDefault();

    let review = {
      id: this.state.id,
      rating: Number(this.ratingNode.value),
      text: this.textNode.value
    };

    if (review.rating === this.state.rating && 
      review.text === this.state.text) 
      return this.props.closeModal();

    this.props.submit(review, this.props.closeModal);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.ratingNode.value = this.state.rating;
    this.textNode.value = this.state.text;
  }

  render() {
    const { formType } = this.props;

    return (
      <div className='review-form'>
        <h1>{ formType } Review</h1>
        <form onSubmit={e => this.submit(e)}>
          <input type='number' placeholder='Rating'
            ref={node => this.ratingNode = node}
            min={1} max={5}
            required
          />
          <textarea placeholder='Text'
            ref={node => this.textNode = node}
            maxLength={250}
          />
          <button>{ formType }</button>
          <UiError />
        </form>
      </div>
    )
  }
}
