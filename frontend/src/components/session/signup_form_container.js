import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../../util/session_api';

const msp = ({ errors }) => {
  return {
    errors,
    formType: 'Sign Up',
    shortcut: (
      <p>
        Already have an account? <Link to='/login'>Log In</Link>
      </p>
    )
  }
}

const mdp = dispatch => {
  return {
    submit: user => dispatch(signupUser(user))
  }
}

export default connect(msp, mdp)(SessionForm);