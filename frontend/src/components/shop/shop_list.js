import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ShopListItem from './shop_list_item'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked
  }

  componentDidMount() {
    this.props.allShops(this.state.liked);
  }

  componentWillReceiveProps(next) {
    let { liked } = this.state;
    
    if (liked !== next.liked) {
      this.setState({ liked: !liked })
      this.props.allShops(next.liked)
    }
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
