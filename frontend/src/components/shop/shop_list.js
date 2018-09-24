import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ShopListItem from './shop_list_item_container'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked,
    user: this.props.user
  }

  componentDidMount() {
    let { user, liked } = this.state;
    this.props.allShops({ user, liked });
    this.props.myLikes();
  }

  componentWillReceiveProps(next) {
    let { user, liked } = this.state;

    // if guest log in or user log out, set user
    const guestLogin = !user && next.user !== user;
    const userLogout = user && next.user !== user;
    if (guestLogin || userLogout) 
      this.setState({ user: next.user })

    // if user is logged in and liked changes, set like
    if (user && next.liked !== liked) {
      this.setState({ liked: next.liked })
      this.props.allShops({ user, liked: !liked });
    }
  }

  render() {
    const shopList = this.props.shops.map(shop => {
      return (
        <ShopListItem 
          key={shop._id} 
          shop={shop}
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
