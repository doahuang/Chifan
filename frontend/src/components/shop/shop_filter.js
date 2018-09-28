import React from 'react';

export default ({ filters, toggle, reset }) => {
  const { open, liked } = filters;

  return (
    <div className='filter'>
      <button>$</button>
      <button>$$</button>
      <button>$$$</button>
      <button>$$$$</button>
      <button
        className={open ? 'active' : ''}
        onClick={() => toggle('open')}>
        Open Now
      </button>
      <button
        className={liked ? 'active' : ''}
        onClick={() => toggle('liked')}>
        Liked
      </button>
      <button 
        className='active'
        onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}