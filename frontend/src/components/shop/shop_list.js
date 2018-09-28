import React from 'react';
import { connect } from 'react-redux';

import ShopListItem from './shop_list_item_container';

const msp = ({ entities, session, filters }) => {
  const { shops, likes } = entities;

  return {
    shops, 
    likes,
    user: session,
    filters
  }
};

const ShopList = ({ shops, likes, user, filters }) => {
  const { liked } = filters;

  let shopList = Object.keys(shops)
    .filter(id => {
      return user && liked ? likes[id] : true;
    })
    .map(id => {
      let shop = shops[id];
      let isLiked = !!likes[id];

      return (
        <ShopListItem
          key={id}
          shop={shop}
          user={user}
          liked={isLiked}
        />
      )
    });

  return (
    <ul>{ shopList }</ul>
  );
}

export default connect(msp)(ShopList);