import { connect } from 'react-redux';
import { addReview } from '../../util/review_actions';
import ReviewForm from './review_form';

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
    submit: (review, history) => dispatch(addReview(review, history))
  };
}

export default connect(msp, mdp)(ReviewForm);