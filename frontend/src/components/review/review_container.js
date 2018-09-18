import { connect } from 'react-redux';
import Review from './review_list';

const msp = ({ reviews }) => {
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {

  }
}

export default connect(msp, mdp)(Review);