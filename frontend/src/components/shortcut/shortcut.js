import React from 'react';
import { Link } from 'react-router-dom';

export default ({ msg, formType, url, openModal }) => {
  return (
    <b>{ msg }{' '}
      <Link to={'/' + url}
        onClick={openModal}>
        { formType }
        </Link>
    </b>
  )
}