import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container'
import UiError from '../error/ui_error'

export default class ShopList extends Component {
  state = {
    user: this.props.user,
    params: { location: 'san francisco' },
    liked: false,
    open: false
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
    const { search, callYelp } = this.props;
    let { params } = this.state;

    if (!search) return callYelp(params);

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

  toggle(field) {
    this.setState({ [field]: !this.state[field] });
  }

  filterShops(liked) {
    const { shops, likes } = this.props;
    const { user } = this.state;
    
    return Object.keys(shops).filter(id => {
      return user && liked ? likes[id] : true;
    });
  }
  
  render() {
    const { shops, likes } = this.props;
    const { user, liked, open, params: { term, location } } = this.state;

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
        <div className='filter'>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
          <button>$$$$</button>
          <button
            className={open ? 'active' : ''}
            onClick={() => this.toggle('open')}>
            Open Now
          </button>
          <button 
            className={ liked ? 'active' : '' }
            onClick={() => this.toggle('liked')}>
            Liked
          </button>
        </div>
        <ul>
          { 
            shopList.length ? shopList : 
            <li><UiError /></li>
          }
        </ul>
        <div className='map'>
          <span>
            Google Maps
          </span>
        </div>
      </div>
    )
  }
}
