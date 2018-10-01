import React, { Component } from 'react'

import ShopFilter from './shop_filter_container';
import ShopList from './shop_list_container';

import { parseUrl } from '../../util/parse';

export default class ShopPage extends Component {
  state = {
    user: this.props.user,
    url: this.props.url,
    params: {}
  }

  componentDidMount() {
    const { user, url, getLikes } = this.props;

    if (user) getLikes();
    this.parse(url);
  }

  componentWillReceiveProps(next) {
    const { user, params } = this.state;

    if (next.user !== user) {
      this.setState({ user: next.user })
      if (next.user) this.props.getLikes();
    }

    const { open } = next.filters;
    if (params.open_now !== open) {
      const newParams = { ...params, open_now: !!open };
      this.update(newParams);
    }
  }

  update(params) {
    this.setState({ params })

    if (!params.location) return;

    this.props.callYelp(params);
  }

  parse(url) {
    const params = parseUrl(url);
    this.update(params)
  }
  
  render() {
    const { filters } = this.props;
    const { params: { term, location }} = this.state;

    let title = `Best ${term || ''} in ${location || 'somewhere'}`;
    title = title.replace(/%20/g, " ");

    return (
      <div className='shop'>
        <h1>{ title }</h1>
        <ShopFilter filters={filters} />
        <ShopList />
      </div>
    )
  }
}
