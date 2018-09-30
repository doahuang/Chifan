import React from 'react';

export default ({ filters, set, reset }) => {
  const isActive = (field, value) => {
    return filters[field] === value ? 'active' : '';
  }

  const toggle = (field, value) => {
    filters[field] === value ? set({ [field]: null }) : set({ [field]: value });
  };

  const filter = (field, values) => {
    return values.map(value => (
      <button className={isActive(field, value)}
        onClick={() => toggle(field, value)}>
        { value }
      </button>
    ));
  }

  return (
    <div className='filter'>
      { filter('price', ['$', '$$', '$$$', '$$$$']) }
      { filter('rating', [2, 3, 4, 5]) }
      <button className={isActive('liked', true)}
        onClick={() => set({ liked: !filters.liked })}>
        Liked
      </button>
      <button className='active'
        onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}