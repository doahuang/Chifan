import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ShopListItem from './shop_list_item_container'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked,
    user: this.props.user
  }

  componentDidMount() {
    this.props.allShops();
    if (this.state.user) this.props.myLikes();
  }

  componentWillReceiveProps(next) {
    let { user, liked } = this.state;
    
    if (next.user !== user) {
      this.setState({ user: next.user })

      if (next.user) this.props.myLikes()
    }

    // only care if logged in and liked changes
    if (user && next.liked !== liked) 
      this.setState({ liked: next.liked })
  }

  fetch() {
    const { shops, likes } = this.props;
    const { user, liked } = this.state;

    return Object.keys(shops).map(id => {
      let shop = shops[id];
      let likedShop = likes[id] ? true : false;
      
      // if on liked page and the shop is not liked
      if (liked && !likedShop) return null;

      return (
        <ShopListItem
          key={id}
          user={user}
          liked={likedShop}
          shop={shop}
        />
      )
    });
  }
  
  render() {
    const shopList = this.fetch();

    return (
      <div className='shop'>
        <h1><Link to='/shops'>Shops</Link></h1>
        <ul>{ shopList }</ul>
      </div>
    )
  }
}
