import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { updateReview } from '../../../actions/review_actions';
import { closeModal } from '../../../actions/modal';
import { clearErrors } from '../../../actions/ui_error';

const _nullReview = {
  rating: '',
  text: ''
};

const msp = ({ entities: { reviews } }, ownProps) => {
  let id = ownProps.location.pathname.split('/')[2];

  return {
    review: reviews[id] || _nullReview,
    formType: 'Update'
  };
}

const mdp = dispatch => {
  return {
    submit: (review, next) => dispatch(updateReview(review, next)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default withRouter(connect(msp, mdp)(ReviewForm));