import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container';
import PageControl from './shop_page_control';
import Map from '../map/map_container';

export default class ShopList extends Component {
  state = {
    page: 0
  }

  gotoPage(i, max) {
    const { page } = this.state;
    if (page + i < 0 || page + i > max - 1) return;
    this.setState({ page: page + i })
  }

  filter() {
    const { shops, likes, filters: { price, rating, liked }} = this.props;

    return Object.keys(shops)
      .filter(id => liked ? likes[id] : true)
      .filter(id => price ? shops[id].price === price : true)
      .filter(id => rating ? Math.floor(shops[id].rating) === rating : true)
  }

  map(shops) {
    const mapShops = {};
    shops.forEach(id => mapShops[id] = this.props.shops[id]);
    return mapShops;
  }

  render() {
    const { shops, likes, user } = this.props;
    let { page } = this.state;

    const filterShops = this.filter();
    const sliceShops = filterShops.slice(page * 10, page * 10 + 10)

    const shopList = sliceShops.map((id, num) => (
      <ShopListItem
        key={id}
        num={num + 1}
        shop={shops[id]}
        user={user}
        liked={!!likes[id]}
      />
    ));

    const mapShops = this.map(sliceShops);

    const max = Math.ceil(filterShops.length / 10) || 1;
    page = page > max ? 1 : page;

    return (
      <div className='shop-list'>
        <ul>
          {
            shopList.length ? shopList :
              <li className='errors'>
                No results found
          </li>
          }
        </ul>
        <Map shops={mapShops} />
        <PageControl
          page={page} 
          max={max}
          gotoPage={(i, max) => this.gotoPage(i, max)}
        />
      </div>
    )
  }
}