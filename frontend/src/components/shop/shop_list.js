import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container';
import UiError from '../error/ui_error';

export default class ShopList extends Component {
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { shops, likes, user, filters } = this.props;
    const { price, liked } = filters;

    const shopList = Object.keys(shops)
      .filter(id => {
        return user && liked ? likes[id] : true;
      })
      .filter(id => price ? shops[id].price === price : true)
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
      <ul>
        {
          shopList.length ? shopList : <li><UiError /></li>
        }
      </ul>
    );
  }
}