import React from 'react';
import { Link } from 'react-router-dom';

export default ({ msg, formType, openModal }) => {
  return (
    <p>
      <span>{ msg } </span>
      <Link to='#' onClick={openModal}>
        { formType }
      </Link>
    </p>
  )
}