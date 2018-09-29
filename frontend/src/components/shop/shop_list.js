import React from 'react'

import ShopListItem from './shop_list_item_container';

export default ({ shops, likes, user, filters }) => {
  const { price, liked } = filters;

  const shopList = Object.keys(shops)
    .filter(id => {
      return liked ? likes[id] : true;
    })
    .filter(id => price ? shops[id].price === price : true)
    .map((id, num) => {
      let shop = shops[id];
      let isLiked = !!likes[id];

      return (
        <ShopListItem
          key={id}
          num={num + 1}
          shop={shop}
          user={user}
          liked={isLiked}
        />
      )
    });

  return (
    <ul>
      {
        shopList.length ? shopList : 
        <li className='errors'>
          { user ? 'No results yet' : 'Please log in' }
        </li>
      }
    </ul>
  );
}