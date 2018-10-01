import React from 'react'

import Map from '../map/map_container';

export default ({ current, lists, count = 10 }) => {
  const list = lists.slice((current - 1) * count, current * count);

  return (
    <div className='page-list'>
      <ul>
        {
          list.length ? list :
          <li className='errors'>
            No results found
          </li>
        }
      </ul>
      <Map list={list} />
    </div>
  )
}
