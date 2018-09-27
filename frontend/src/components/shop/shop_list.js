import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container'
import UiError from '../error/ui_error'

export default class ShopList extends Component {
  state = {
    user: this.props.user,
    params: { term: '', location: 'san francisco' },
    liked: false
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.call();

    const { user, getLikes } = this.props;
    if (user) getLikes();
  }

  componentWillReceiveProps(next) {
    const { user } = this.state;
    
    if (next.user !== user) {
      this.setState({ user: next.user })
      if (next.user) this.props.getLikes();
    }
  }

  call() {
    const { shops, search, callYelp } = this.props;
    let { params } = this.state;

    // only call yelp api if search or first time fetch
    if (!search) {
      if (!Object.keys(shops).length) return callYelp(params);
      return
    }

    params = {};
    search.slice(1).split('&').forEach(el => {
      let [k, v] = el.split('=');
      params[k] = v;
    });

    // need at least a location to call yelp api
    if (!params.location) return;

    this.setState({ params });
    callYelp(params);
  }

  filterShops(liked) {
    const { shops, likes } = this.props;
    
    return Object.keys(shops).filter(id => {
      return liked ? likes[id] : true;
    });
  }
  
  render() {
    const { shops, likes } = this.props;
    const { user, liked, params: { term, location } } = this.state;

    const shopList = this.filterShops(liked).map(id => {
      let shop = shops[id];
      let isLiked = likes[id];
      return (
        <ShopListItem 
          key={id}
          shop={shop}
          user={user}
          liked={isLiked}
        />
      )
    });

    let loc = 'somewhere';
    if (location) loc = location.replace(/%20/, ' ');

    return (
      <div className='shop'>
        <h1>Best {term} in {loc}</h1>
        <ul>
          { 
            shopList.length ? shopList : 
            <li><UiError /></li>
          }
        </ul>
        <div>
          <span>
            Google Maps
          </span>
        </div>
      </div>
    )
  }
}
