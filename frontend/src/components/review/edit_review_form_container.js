import { connect } from 'react-redux';
import { updateReview } from '../../util/review_actions';
import ReviewForm from './review_form';

const _nullReview = {
  rating: ''
};

const msp = ({ errors, reviews }, ownProps) => {
  return {
    errors,
    review: reviews[ownProps.match.params.id] || _nullReview,
    formType: 'Update'
  };
}

const mdp = dispatch => {
  return {
    submit: (review, history) => dispatch(updateReview(review, history))
  };
}

export default connect(msp, mdp)(ReviewForm);