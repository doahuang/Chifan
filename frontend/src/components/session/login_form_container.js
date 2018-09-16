import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../util/session_api';

const msp = ({ errors }) => {
  return {
    errors,
    formType: 'Log In',
    shortcut: (
      <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    )
  }
}

const mdp = dispatch => {
  const demo = { email: 'demo@demo', password: '123' };
  
  return {
    submit: user => dispatch(loginUser(user)),
    demo: () => dispatch(loginUser(demo))    
  }
}

export default connect(msp, mdp)(SessionForm);