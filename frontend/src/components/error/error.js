import React from 'react';
import { connect } from 'react-redux';

const Errors = ({ errors }) => (
  <p className='errors'>
    { errors.msg }
  </p>
);

const msp = ({ errors }) => ({
  errors
});

export default connect(msp)(Errors);