import React, { Component } from 'react'

import PageList from './page_list';
import PageNav from './page_nav';

export default class PageControl extends Component {
  state = {
    current: 1,
    total: this.props.total
  }

  componentWillReceiveProps(next) {
    const { total } = this.state;
    if (total !== next.total) 
      this.setState({ current: 1, total: next.total })
  }

  flip(page) {
    const { current, total } = this.state;

    if (current + page > 0 && current + page <= total)
      this.setState({ current: current + page });
  }

  jump(page) {
    this.setState({ current: page })
  }

  render() {
    const { current, total } = this.state;
    const { lists, count } = this.props;

    return (
      <div className='page-control'>
        <PageList 
          current={current}
          lists={lists} 
          count={count}
        />
        <PageNav 
          current={current}
          total={total}
          prev={() => this.flip(-1)}
          next={() => this.flip(1)}
          first={() => this.jump(1)}
          last={() => this.jump(total)}
        />
      </div>
    )
  }
}