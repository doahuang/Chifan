import { connect } from 'react-redux';
import { addReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';
import { closeModal } from '../../../actions/modal';

const _nullReview = {
  rating: '',
  text: ''
};

const msp = () => {
  return {
    review: _nullReview,
    formType: 'Add'
  };
}

const mdp = dispatch => {
  return {
    submit: (review, next) => dispatch(addReview(review, next)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp, mdp)(ReviewForm);