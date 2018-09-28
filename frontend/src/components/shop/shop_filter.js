import React from 'react';

export default ({ filters, set, reset }) => {
  const { price, liked } = filters;

  const isActive = (filter, value) => {
    return filter === value ? 'active' : '';
  }

  const toggle = value => {
    price === value ? set({ price: null }) : set({ price: value });
  };

  return (
    <div className='filter'>
      <button className={isActive(price, '$')}
        onClick={() => toggle('$')}>
        $
      </button>
      <button className={isActive(price, '$$')}
        onClick={() => toggle('$$')}>
        $$
      </button>
      <button className={isActive(price, '$$$')}
        onClick={() => toggle('$$$')}>
        $$$
      </button>
      <button className={isActive(price, '$$$$')}
        onClick={() => toggle('$$$$')}>
        $$$$
      </button>
      <button className={isActive(liked, true)}
        onClick={() => set({ liked: !liked })}>
        Liked
      </button>
      <button className='active'
        onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}