import React from 'react'

export default ({ current, total, prev, next }) => {
  return (
    <span className='page-nav'>
      <a onClick={prev}>
        Prev
      </a>
      {current} / {total}
      <a onClick={next}>
        Next
      </a>
    </span>
  )
}
