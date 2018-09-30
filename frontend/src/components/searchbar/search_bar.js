import React from 'react'

export default ({ history }) => {
  const submit = e => {
    e.preventDefault();

    let term = this.termNode.value;
    let loc = this.locNode.value || 'san%20francisco';

    const query = `term=${term}&location=${loc}`;
    history.push(`/shops?${query}`);
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