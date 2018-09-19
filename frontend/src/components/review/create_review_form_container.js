import { connect } from 'react-redux';
import { addReview } from '../../util/review_actions';
import ReviewForm from './review_form';
import { closeModal } from '../../actions/modal';

const _nullReview = {
  rating: ''
};

const msp = ({ errors }) => {
  return {
    errors,
    review: _nullReview,
    formType: 'Add'
  };
}

const mdp = dispatch => {
  return {
    submit: (review, next) => dispatch(addReview(review, next)),
    closeModal: modal => dispatch(closeModal(modal))
  };
}

export default connect(msp, mdp)(ReviewForm);