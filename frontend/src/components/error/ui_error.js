import React from 'react';
import { connect } from 'react-redux';

const UiError = ({ errors }) => (
  <p className='errors'>
    {errors.msg}
  </p>
);

const msp = ({ errors }) => ({
  errors: errors.ui
});

export default connect(msp)(UiError);