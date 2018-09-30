import React from 'react'

import ShopListItem from './shop_list_item_container';
import Map from '../map/map_container';

export default ({ shops, likes, filters, user }) => {
  const { price, liked, rating, distance } = filters;

  const filter = () => {
    return Object.keys(shops)
      .filter(id => liked ? likes[id] : true)
      .filter(id => price ? shops[id].price === price : true)
      .filter(id => distance ? shops[id].distance <= distance : true)
      .filter(id => rating ? Math.floor(shops[id].rating) === rating : true)
  }

  const map = filterShops => {
    const mapShops = {};
    filterShops.forEach(id => mapShops[id] = shops[id]);
    return mapShops;
  }
    
  const filterShops = filter();
  const shopList = filterShops.map((id, num) => (
    <ShopListItem
      key={id}
      num={num + 1}
      shop={shops[id]}
      user={user}
      liked={!!likes[id]}
    />
  ));

  const mapShops = map(filterShops);
    
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
    </div>
  );
}