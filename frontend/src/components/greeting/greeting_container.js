import { connect } from 'react-redux';
import Greeting from './greeting';
import { 
  logoutUser, 
  loginUser
} from '../../util/session_api';

const msp = ({ session }) => {
  return {
    currentUser: session
  }
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    login: user => dispatch(loginUser(user))
  }
};

export default connect(msp, mdp)(Greeting);