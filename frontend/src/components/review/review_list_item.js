import React from 'react'
import { Link } from 'react-router-dom';

export default ({ review, openModal, deleteReview }) => {
  const { _id, rating, text } = review;
  
  return (
    <li>
      <div>
        <b>Rating: { rating }</b>
        <p>{ text }</p>
      </div>
      <div>
        <Link to={`/reviews/${_id}/edit`}
          onClick={() => openModal('editReview')}>
          Update
        </Link>
        <button onClick={() => deleteReview(_id)}>
          Delete
        </button>
      </div>
    </li>
  )
};