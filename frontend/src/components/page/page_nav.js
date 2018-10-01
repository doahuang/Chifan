import React from 'react'

export default ({ current, total, prev, next, first, last }) => {
  return (
    <span className='page-nav'>
      <a onClick={first}>
        First
      </a>
      <a onClick={prev}>
        Prev
      </a>
      <span>
        {current} / {total}
      </span>
      <a onClick={next}>
        Next
      </a>
      <a onClick={last}>
        Last
      </a>
    </span>
  )
}
