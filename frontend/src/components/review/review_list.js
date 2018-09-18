import React, { Component } from 'react'

export default class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const { reviews } = this.props;
    const reviewList = Object.keys(reviews).map(id => {
      let review = reviews[id];
      return (
        <li key={review._id}>
          {review.rating} {review.text}
        </li>
      );
    });

    return (
      <div className='review'>
        <h1>Reviews</h1>
        <ul>{reviewList}</ul>
      </div>
    )
  }
}