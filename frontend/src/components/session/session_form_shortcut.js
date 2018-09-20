import React from 'react';
import { Link } from 'react-router-dom';

export default ({ msg, formType, url, openModal }) => {
  return (
    <p>{ msg }{' '}
      <Link to={'/' + url}
        onClick={openModal}>
        { formType }
        </Link>
    </p>
  )
}