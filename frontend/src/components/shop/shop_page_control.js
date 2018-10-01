import React from 'react'

export default ({ page, max, gotoPage }) => {
  return (
    <div className='page-control'>
      <a onClick={() => gotoPage(-1, max)}>
        Previous
        </a>
      {page + 1} / {max}
      <a onClick={() => gotoPage(1, max)}>
      Next
      </a>
    </div>
  )
}