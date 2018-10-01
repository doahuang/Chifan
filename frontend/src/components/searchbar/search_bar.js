import React from 'react'

import { parseParams } from '../../util/parse';

export default ({ history }) => {
  const submit = e => {
    e.preventDefault();

    const params = {
      term: this.termNode.value,
      location: this.locNode.value || 'san francisco',
      limit: 50
    }

    const url = parseParams(params)
    history.push(`/shops${url}`);
  }

  return (
    <form className='searchbar'
      onSubmit={e => submit(e)} 
    >
      <b>Find</b>
      <input 
        placeholder='boba, ramen, steak...' 
        maxLength={30} 
        ref={node => this.termNode = node}
      />
      <b>Near</b>
      <input 
        placeholder='san francisco' 
        maxLength={30} 
        ref={node => this.locNode = node}
      />
      <button>Go</button>
    </form>
  );
}