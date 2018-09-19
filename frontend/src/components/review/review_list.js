import React, { Component } from 'react'
import ReviewListItem from './review_list_item';

export default class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  addReview() {
    this.props.addReview({ 
      rating: Math.floor(Math.random() * 5 + 1),
      text: 'this is generated randomly'
    })
  }

  render() {
    const { reviews } = this.props;
    let reviewList = Object.keys(reviews).map(id => {
      return <ReviewListItem key={id} 
        review={reviews[id]} 
        deleteReview={this.props.deleteReview}/>;
    });

    return (
      <div className='review'>
        <h1>Reviews</h1>
        <button onClick={() => this.addReview()}>
          Randomizer
        </button>
        <ul>{ reviewList }</ul>
      </div>
    )
  }
}