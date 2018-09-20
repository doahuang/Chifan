import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import ShortCut from './session_form_shortcut';
import { signupUser } from '../../util/session_api';
import { openModal, closeModal } from '../../actions/modal';
import { clearErrors } from '../../actions/session_error';

const msp = () => {
  return {
    formType: 'Sign Up'
  }
}

const mdp = dispatch => {
  return {
    submit: (user, next) => dispatch(signupUser(user, next)),
    closeModal: () => dispatch(closeModal()), 
    clearErrors: () => dispatch(clearErrors()),
    shortcut: 
      <ShortCut
        msg='Already have an account?'
        formType='Log In'
        url='login'
        openModal={() => dispatch(openModal('login'))}
      />
  }
}

export default connect(msp, mdp)(SessionForm);