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
      <b>Don't have an account? <Link to='/signup' 
        onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </Link>
      </b>
    )
  }
}

export default connect(msp, mdp)(SessionForm);