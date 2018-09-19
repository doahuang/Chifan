import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/routes';
import ReviewListItem from './review_list_item';
import CreateReview from './create_review_form_container';
import EditReview from './edit_review_form_container';

export default class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  addReview() {
    let review = {
      rating: Math.floor(Math.random() * 5 + 1),
      text: 'this is generated randomly'
    };
    this.props.addReview(review, this.props.history)
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
        <Link to='/reviews/new'>
          Create
        </Link>
        <ProtectedRoute path='/reviews/new' component={ CreateReview } />
        <ProtectedRoute path='/reviews/:id/edit' component={ EditReview } />
        <ul>{ reviewList }</ul>
      </div>
    )
  }
}