import React from 'react';

export default () => {
  const base = 'https://simpleicons.org/icons';

  return (
    <div className='help'>
      <ul>
        <li>
          <img src={`${base}/googlechrome.svg`} alt='' />
          <a href='https://whosdoa.com'>Portfolio</a>
        </li>
        <li>
          <img src={`${base}/linkedin.svg`} alt='' />
          <a href='https://linkedin.com/in/doahuang'>LinkedIn</a>
        </li>
        <li>
          <img src={`${base}/github.svg`} alt='' />
          <a href='https://github.com/doahuang'>GitHub</a>
        </li>
        <li>
          <img src={`${base}/angellist.svg`} alt='' />
          <a href='https://angel.co/doahuang'>AngelList</a>
        </li>
      </ul>
    </div>
  )
}