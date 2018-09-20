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

  create() {
    this.props.history.push('/reviews/new');
    this.props.openModal('createReview');
  }

  render() {
    const { reviews, deleteReview, openModal, history } = this.props;
    let reviewList = Object.keys(reviews).map(id => {
      return (
        <ReviewListItem key={id} 
          review={reviews[id]} 
          deleteReview={deleteReview}
          openModal={openModal}
          history={history}
        />
      );
    });

    return (
      <div className='review'>
        <div className='header'>
          <h1><Link to='/reviews'>My Reviews</Link></h1>
          <button onClick={() => this.addReview()}>
            Randomizer
          </button>
          <button onClick={() => this.create()}>
            Create
          </button>
        </div>
        <ul>{ reviewList }</ul>
      </div>
    )
  }
}