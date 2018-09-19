import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateReview } from '../../util/review_actions';
import ReviewForm from './review_form';
import { closeModal } from '../../actions/modal';

const _nullReview = {
  rating: ''
};

const msp = ({ errors, reviews }, ownProps) => {
  let id = ownProps.location.pathname.split('/')[2];

  return {
    errors,
    review: reviews[id] || _nullReview,
    formType: 'Update'
  };
}

const mdp = dispatch => {
  return {
    submit: (review, next) => dispatch(updateReview(review, next)),
    closeModal: () => dispatch(closeModal())
  };
}

export default withRouter(connect(msp, mdp)(ReviewForm));