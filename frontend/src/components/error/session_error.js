import React from 'react';
import { connect } from 'react-redux';

const SessionError = ({ errors }) => (
  <p className='errors'>
    { errors.msg }
  </p>
);

const msp = ({ errors }) => ({
  errors: errors.session
});

export default connect(msp)(SessionError);