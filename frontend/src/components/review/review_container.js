import { connect } from 'react-redux';
import ReviewList from './review_list';
import { 
  fetchReviews,
  addReview,
  deleteReview
} from '../../util/review_actions';

const msp = ({ reviews }) => {
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    addReview: (review, history) => dispatch(addReview(review, history)),
    deleteReview: id => dispatch(deleteReview(id))
  }
}

export default connect(msp, mdp)(ReviewList);