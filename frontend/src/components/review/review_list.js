import React from 'react';

export default ({ reviews = [] }) => {
  const reviewList = reviews.map(el => {
    return <li id={el.id}>{ el.rating } { el.text }</li>
  });

  return (
    <div>
      <h1>Reviews</h1>
      <ul>{ reviewList }</ul>
    </div>
  )
};