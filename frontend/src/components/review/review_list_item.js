import React from 'react'
import { Link } from 'react-router-dom';

export default ({ review, deleteReview, openModal }) => {
  const { _id, rating, text } = review;
  
  return (
    <li>
      <div>
        <p>Rating: { rating }</p>
        <p>{ text }</p>
      </div>
      <div>
        <Link to={`/reviews/${_id}/edit`}
          onClick={() => openModal('editReview')}>
          Edit
        </Link>
        <button onClick={() => deleteReview(_id)}>
          Delete
        </button>
      </div>
    </li>
  )
}