import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../../util/session_api';
import { openModal, closeModal } from '../../actions/modal';

const msp = ({ errors }) => {
  return {
    errors,
    formType: 'Sign Up'
  }
}

const mdp = dispatch => {
  return {
    submit: (user, next) => dispatch(signupUser(user, next)),
    closeModal: () => dispatch(closeModal()),
    shortcut: (
      <div>
        <b>Already have an account? </b>
        <Link to='/login' onClick={() => dispatch(openModal('login'))}>Log In</Link>
      </div>
    )
  }
}

export default connect(msp, mdp)(SessionForm);