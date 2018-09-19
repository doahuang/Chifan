import { connect } from 'react-redux';
import { updateReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';
import { closeModal } from '../../../actions/modal';
import { withRouter } from 'react-router-dom';

const _nullReview = {
  rating: '',
  text: ''
};

const msp = ({ reviews }, ownProps) => {
  let id = ownProps.location.pathname.split('/')[2];

  return {
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