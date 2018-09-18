import { connect } from 'react-redux';
import ReviewList from './review_list';
import { 
  fetchReviews
} from '../../util/review_actions';

const msp = ({ reviews }) => {
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(msp, mdp)(ReviewList);