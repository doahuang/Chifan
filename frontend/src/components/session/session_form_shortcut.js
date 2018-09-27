import React from 'react';

export default ({ msg, formType, openModal }) => {
  return (
    <p>
      <span>{ msg } </span>
      <a onClick={openModal}>
        { formType }
      </a>
    </p>
  )
}