import React, { Component } from 'react'

import ShopListItem from './shop_list_item_container'

export default class ShopList extends Component {
  state = {
    liked: this.props.liked,
    loggedin: this.props.loggedin
  }

  componentDidMount() {
    this.props.allShops();
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

  filterShops(liked) {
    const { shops, likes } = this.props;
    
    return Object.keys(shops).filter(id => {
      return liked ? likes[id] : true;
    });
  }
  
  render() {
    const { shops, likes } = this.props;
    const { loggedin, liked } = this.state;

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

    return (
      <div className='shop'>
        <h1>Best boba in San Leandro</h1>
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
