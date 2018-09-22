import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ShopListItem from './shop_list_item'

export default class ShopList extends Component {
  componentDidMount() {
    this.props.allShops();
  }

  render() {
    const shopList = this.props.shops.map(shop => {
      return (
        <ShopListItem 
          key={shop._id} 
          shop={shop} 
        />
      );
    })

    return (
      <div className='shop'>
        <Link to='/shops'><h1>Shops</h1></Link>
        <ul>{ shopList }</ul>
      </div>
    )
  }
}
