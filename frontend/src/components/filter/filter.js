import React from 'react';

export default ({ filters, set, reset }) => {
  
  const active = (field, value) => {
    return filters[field] === value ? 'active' : '';
  }

  const change = (field, value) => {
    filters[field] === value ? 
    set({ [field]: null }) : set({ [field]: value });
  };

  const changeGroup = (field, values) => {
    return values.map((value, i) => (
      <button 
        key={i} className={active(field, value)}
        onClick={() => change(field, value)}
      >
        { value }
      </button>
    ));
  }

  const toggle = filter => {
    set({ [filter]: !filters[filter] })
  }

  const toggleButton = (field, value) => {
    return (
      <button 
        className={active(field, true)}
        onClick={() => toggle(field)}
      >
        { value }
      </button>
    )
  }

  return (
    <div className='filter'>
      <span className='group'>
        <button disabled>Price</button>
        { changeGroup('price', ['$', '$$', '$$$', '$$$$']) }
      </span>
      <span className='group'>
        <button disabled>Rating</button>
        { changeGroup('rating', [3, 4, 5]) }
      </span>
      <span>
        { toggleButton('open', 'Open Now') }
        { toggleButton('liked', 'Liked') }
        <button 
          className='reset' 
          onClick={() => reset()}
        >
          Reset
        </button>
      </span>
    </div>
  )
}