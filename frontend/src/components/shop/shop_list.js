import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ShopListItem from './shop_list_item_container'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked,
    user: this.props.user
  }

  componentDidMount() {
    let { user } = this.state;
    if (user) this.props.myLikes();
    this.props.allShops({ user });
  }

  componentWillReceiveProps(next) {
    let { user, liked } = this.state;
    const guestLogin = !user && next.user !== user;
    const userLogout = user && next.user !== user;
    
    // if guest log in or user log out, set user
    if (guestLogin || userLogout) 
      this.setState({ user: next.user })

    // if user is logged in and liked changes, set like
    if (user && next.liked !== liked) {
      this.setState({ liked: next.liked })
    }
  }
  
  render() {
    const { shops, likes } = this.props;
    const { user, liked } = this.state;

    const shopIds = Object.keys(shops);
    let likedShops = shopIds;
    if (user && liked) 
      likedShops = shopIds.filter(id => {
        return likes[id] ? true : false
      });

    const shopList = likedShops.map(id => {
      let shop = shops[id];
      let liked = likes[id] ? true : false;

      return (
        <ShopListItem 
          key={id} 
          shop={shop}
          liked={liked}
        />
      )
    });

    return (
      <div className='shop'>
        <h1><Link to='/shops'>Shops</Link></h1>
        <ul>{ shopList }</ul>
      </div>
    )
  }
}
