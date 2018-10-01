import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container';
import PageControl from '../page/page_control';

export default class ShopList extends Component {

  filter(shops) {
    const { likes, filters: { price, rating, liked }} = this.props;

    return Object.values(shops)
      .filter(shop => liked ? likes[shop.id] : true)
      .filter(shop => price ? shop.price === price : true)
      .filter(shop => rating ? Math.floor(shop.rating) === rating : true)
  }

  render() {
    const { shops, likes, user } = this.props;

    const shopsFiltered = this.filter(shops);

    const count = 5;
    const total = Math.ceil(shopsFiltered.length / count) || 1;

    const lists = shopsFiltered.map((shop, num) => {
      const liked = !!likes[shop.id]
      shop.label = `${num + 1}`

      return (
        <ShopListItem
          key={num}
          num={num + 1}
          shop={shop}
          user={user}
          liked={liked}
        />
      )
    });

    return (
      <div className='shop-list'>
        <PageControl 
          total={total} 
          lists={lists}
          count={count}
        />
      </div>
    )
  }
}