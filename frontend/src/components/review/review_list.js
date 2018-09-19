import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReviewListItem from './review_list_item';

export default class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  addReview() {
    let review = {
      rating: Math.floor(Math.random() * 5 + 1),
      text: 'this is generated randomly'
    };
    this.props.addReview(review)
  }

  render() {
    const { reviews, deleteReview, openModal } = this.props;
    let reviewList = Object.keys(reviews).map(id => {
      return <ReviewListItem key={id} 
        review={reviews[id]} 
        deleteReview={deleteReview}
        openModal={openModal} />;
    });

    return (
      <div className='review'>
        <h1>Reviews</h1>
        <button onClick={() => this.addReview()}>
          Randomizer
        </button>
        <Link to='/reviews/new' 
          onClick={() => openModal('createReview')}>
          Create
        </Link>
        <ul>{ reviewList }</ul>
      </div>
    )
  }
}