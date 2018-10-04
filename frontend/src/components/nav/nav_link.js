import React from 'react'

export default props => {
  const { children, actions, ...options } = props

  return (
    <a onClick={actions} {...options}>
      { children }
    </a>
  )
}
