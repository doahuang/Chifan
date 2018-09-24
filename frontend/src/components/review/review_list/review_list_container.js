import { connect } from 'react-redux';
import ReviewList from './review_list';
import { 
  fetchReviews,
  addReview,
  deleteReview
} from '../../../actions/review_actions';
import { openModal } from '../../../actions/modal';

const msp = ({ entities: { reviews } }) => {
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: id => dispatch(deleteReview(id)),
    addReview: review => dispatch(addReview(review)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(ReviewList);