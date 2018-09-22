import React from 'react';

export default ({ shop }) => {
  return (
    <li>
      <img src={shop.photo} alt='' />
      <div>
        <h1>{shop.name} </h1>
        <p>{shop.rating} stars {shop.reviews} reviews </p>
        <p>{shop.price} $</p>
        Hours:
        <p>{shop.hours} </p>
        <p>Phone: {shop.phone} </p>
        <p>Address: {shop.address} </p>
      </div>
    </li>
  )
}