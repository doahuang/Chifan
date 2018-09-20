import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signupUser } from '../../util/session_api';
import { openModal, closeModal } from '../../actions/modal';
import { clearErrors } from '../../actions/session_error';
import ShortCut from '../shortcut/shortcut';

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