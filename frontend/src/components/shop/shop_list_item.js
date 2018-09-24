import React from 'react';

export default ({ shop, like, unlike }) => {
  const shopId = shop._id;
  let hours = shop.hours.split('\\n');
  hours = hours.map((el, i) => <p key={i}>{el}</p>);

  return (
    <li>
      <img src={shop.photo} alt='' />
      <section>
        <b>{shop.name}</b>
        <p>{shop.rating} stars</p>
        <p>{shop.reviews} reviews </p>
        <p>{shop.price} dollar sign</p>
        <p>{shop.phone} </p>
        <p>{shop.address} </p>
      </section>
      <section>
        {hours}
      </section>
      <div>
        <button onClick={() => like(shopId)}>
          Like
        </button>
        <button onClick={() => unlike(shopId)}>
          Unlike
        </button>
      </div>
    </li>
  )
}