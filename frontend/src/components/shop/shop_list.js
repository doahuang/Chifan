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
        <h1><Link to='/shops'>Shops</Link></h1>
        <ul>{ shopList }</ul>
      </div>
    )
  }
}
