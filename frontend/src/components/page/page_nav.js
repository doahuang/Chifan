import React from 'react'

import NavLink from '../nav/nav_link'

export default ({ current, total, prev, next, jump }) => {
  const pageList = total => {
    const pages = [];
    for (let i = 0; i < total; i++) {
      pages.push(i + 1)
    }

    return pages.map(page => (
      current === page ? 
      <span key={page}>
        {page}
      </span> :
      <NavLink 
        key={page}
        actions={() => jump(page)}>
        { page }
      </NavLink>
    ));
  }

  return (
    <div className='page-nav'>
      <NavLink actions={prev}>
        ❮ Prev
      </NavLink>
      <span>
        { pageList(total) }
      </span>
      <NavLink actions={next}>
        Next ❯
      </NavLink>
    </div>
  )
}
