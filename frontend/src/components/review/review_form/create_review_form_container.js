import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { addReview } from '../../../actions/review_actions';
import { closeModal } from '../../../actions/modal';
import { clearErrors } from '../../../actions/ui_error';

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
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(msp, mdp)(ReviewForm);