import React from 'react';

export default ({ filters, set, reset }) => {
  const isActive = (field, value) => {
    return filters[field] === value ? 'active' : '';
  }

  const change = (field, value) => {
    filters[field] === value ? set({ [field]: null }) : set({ [field]: value });
  };

  const filter = (field, values) => {
    return values.map((value, i) => (
      <button key={i} className={isActive(field, value)}
        onClick={() => change(field, value)}>
        { value }
      </button>
    ));
  }

  const toggle = filter => {
    set({ [filter]: !filters[filter] })
  }

  return (
    <div className='filter'>
      <span className='price-filter'>
        { filter('price', ['$', '$$', '$$$', '$$$$']) }
      </span>
      <span className='rating-filter'>
        { filter('rating', [2, 3, 4, 5]) }
      </span>
      <button className={isActive('open', true)}
        onClick={() => toggle('open')}>
        Open Now
      </button>
      <button className={isActive('liked', true)}
        onClick={() => toggle('liked')}>
        Liked
      </button>
      <button className='reset' onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}