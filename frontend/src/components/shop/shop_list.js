import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked,
    loggedin: this.props.loggedin,
    params: { term: '', location: 'san francisco' }
  }

  componentDidMount() {
    this.call(this.props.query);
    if (this.state.loggedin) this.props.getLikes();
  }

  componentWillReceiveProps(next) {
    let { loggedin, liked } = this.state;
    
    if (next.loggedin !== loggedin) {
      this.setState({ loggedin: next.loggedin })
      if (next.loggedin) this.props.getLikes();
    }

    // only care if logged in and liked changes
    if (loggedin && next.liked !== liked) 
      this.setState({ liked: next.liked })
  }

  call(query) {
    if (!query || this.state.liked)
      return this.props.callYelp(this.state.params);

    const params = {};

    query.slice(1).split('&').forEach(el => {
      let [k, v] = el.split('=');
      params[k] = v;
    });

    this.setState({ params });
    this.props.callYelp(params);
  }

  filterShops(liked) {
    const { shops, likes } = this.props;
    
    return Object.keys(shops).filter(id => {
      return liked ? likes[id] : true;
    });
  }
  
  render() {
    const { shops, likes } = this.props;
    const { loggedin, liked, params } = this.state;

    const shopList = this.filterShops(liked).map(id => {
      let shop = shops[id];
      let isLiked = likes[id];
      return (
        <ShopListItem 
          key={id}
          shop={shop}
          loggedin={loggedin}
          liked={isLiked}
        />
      )
    });

    let { term, location } = params;
    if (location)
      location = location.split('%20').join(' ');

    return (
      <div className='shop'>
        <h1>Best {term} in {location}</h1>
        <ul>{ shopList }</ul>
        <div>
          <span>
            Google Maps
          </span>
        </div>
      </div>
    )
  }
}
