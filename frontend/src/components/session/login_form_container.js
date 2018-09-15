import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../util/session_api';

const msp = ({ errors }) => {
  return {
    errors,
    formType: 'Log In'
  }
}

const mdp = dispatch => {
  return {
    submit: user => dispatch(loginUser(user))
  }
}

export default connect(msp, mdp)(SessionForm);