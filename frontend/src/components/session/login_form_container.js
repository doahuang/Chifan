import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../util/session_api';
import { openModal, closeModal } from '../../actions/modal';

const msp = ({ errors }) => {
  return {
    errors,
    formType: 'Log In'
  }
}

const mdp = dispatch => {
  return {
    submit: (user, next) => dispatch(loginUser(user, next)),
    closeModal: () => dispatch(closeModal()),
    shortcut: (
      <div>
        <b>Don't have an account? </b>
        <Link to='/signup' 
          onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </Link>
      </div>
    )
  }
}

export default connect(msp, mdp)(SessionForm);