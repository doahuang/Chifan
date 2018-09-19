import { connect } from 'react-redux';
import ReviewList from './review_list';
import { 
  fetchReviews,
  addReview,
  deleteReview
} from '../../util/review_actions';
import { openModal } from '../../actions/modal';

const msp = ({ reviews }) => {
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    addReview: (review, history) => dispatch(addReview(review, history)),
    deleteReview: id => dispatch(deleteReview(id)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(ReviewList);