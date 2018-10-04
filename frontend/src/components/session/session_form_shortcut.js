import React from 'react';

import NavLink from '../nav/nav_link'

export default ({ msg, formType, openModal }) => {
  return (
    <p>
      <span>{ msg } </span>
      <NavLink actions={openModal}>
        { formType }
      </NavLink>
    </p>
  )
}