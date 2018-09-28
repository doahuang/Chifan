import React, { Component } from 'react'

import ShopFilter from './shop_filter_container';
import ShopList from './shop_list';
import Map from '../map/map';

export default class ShopPage extends Component {
  state = {
    user: this.props.user,
    params: { location: 'san francisco' }
  }

  componentDidMount() {
    this.call();
    const { user, getLikes } = this.props;
    if (user) getLikes();
  }

  componentWillReceiveProps(next) {
    if (next.user !== this.state.user) {
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
  
  render() {
    const { params: { term, location } } = this.state;
    let loc = 'somewhere';
    if (location) loc = location.replace(/%20/, ' ');

    return (
      <div className='shop'>
        <h1>Best {term} in {loc}</h1>
        <ShopFilter />
        <ShopList />
        <Map />
      </div>
    )
  }
}
