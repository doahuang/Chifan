import React, { Component } from 'react'

import { parseParams } from '../../util/parse';

export default class SearchBar extends Component {
  submit(e) {
    e.preventDefault();

    const { termNode, locNode } = this.refs;
    const params = {
      term: termNode.value,
      location: locNode.value || 'san francisco'
    }

    const url = parseParams(params)
    
    this.props.history.push(`/shops${url}`);
  }


  render() {
    return (
      <form className='searchbar'
        onSubmit={e => this.submit(e)}
      >
        <b>Find</b>
        <input
          placeholder='boba, ramen, steak...'
          maxLength={30}
          ref='termNode'
        />
        <b>Near</b>
        <input
          placeholder='san francisco'
          maxLength={30}
          ref='locNode'
        />
        <button>Go</button>
      </form>
    );
  }
}