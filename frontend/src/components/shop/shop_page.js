import React, { Component } from 'react'

import ShopFilter from './shop_filter_container';
import ShopList from './shop_list_container';

export default class ShopPage extends Component {
  state = {
    user: this.props.user,
    search: this.props.search,
    params: { location: 'san francisco' }
  }

  componentDidMount() {
    if (this.props.user) this.props.getLikes();
    this.call(this.state.search);
  }

  componentWillReceiveProps(next) {
    const { user, search } = this.state;

    if (next.user !== user) {
      this.setState({ user: next.user })
      if (next.user) this.props.getLikes();
    }

    if (next.search !== search)
      this.setState({ search: next.search })
      this.call(next.search);
  }

  call(search) {
    const { callYelp } = this.props;
    let { params } = this.state;

    if (!search) return callYelp(params);

    params = {};
    search.slice(1).split('&').forEach(el => {
      let [k, v] = el.split('=');
      params[k] = v;
    });

    this.setState({ params });
    // need at least a location to call yelp api
    if (!params.location) return;

    callYelp(params);
  }
  
  render() {
    let { params: { term, location }} = this.state;

    if (location) location = location.replace(/%20/g, ' ');
    if (term) term = term.replace(/%20/g, ' ');

    return (
      <div className='shop'>
        <h1>Best {term} in {location || 'somewhere'}</h1>
        <ShopFilter />
        <ShopList />
      </div>
    )
  }
}
