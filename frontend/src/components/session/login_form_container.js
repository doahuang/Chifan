import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import ShortCut from './session_form_shortcut';
import { loginUser } from '../../util/session_api';
import { openModal, closeModal } from '../../actions/modal';
import { clearErrors } from '../../actions/session_error';

const msp = () => {
  return {
    formType: 'Log In'
  }
}

const mdp = dispatch => {
  return {
    submit: (user, next) => dispatch(loginUser(user, next)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    shortcut:
      <ShortCut
        msg="Don't have an account?"
        formType='Sign Up'
        openModal={() => dispatch(openModal('signup'))}
      />
  }
}

export default connect(msp, mdp)(SessionForm);