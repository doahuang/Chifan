import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../../util/session_api';
import { openModal } from '../../actions/modal';

const msp = ({ session }) => {
  return {
    currentUser: session
  }
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
  }
};

export default connect(msp, mdp)(Greeting);