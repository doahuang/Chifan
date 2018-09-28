import React from 'react';

export default ({ filters, set, reset }) => {
  const { price, liked } = filters;

  return (
    <div className='filter'>
      <button
        className={price === '$' ? 'active' : '' }
        onClick={() => {
          price === '$' ? set({ price: '' }) : set({ price: '$' })
        }}>
        $
      </button>
      <button
        className={price === '$$' ? 'active' : ''}
        onClick={() => {
          price === '$$' ? set({ price: '' }) : set({ price: '$$' })
        }}>
        $$
      </button>
      <button
        className={price === '$$$' ? 'active' : ''}
        onClick={() => {
          price === '$$$' ? set({ price: '' }) : set({ price: '$$$' })
        }}>
        $$$
      </button>
      <button
        className={price === '$$$$' ? 'active' : ''}
        onClick={() => {
          price === '$$$$' ? set({ price: '' }) : set({ price: '$$$$' })
        }}>
        $$$$
      </button>
      <button
        className={liked ? 'active' : ''}
        onClick={() => set({ liked: !liked })}>
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