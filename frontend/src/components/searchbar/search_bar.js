import React from 'react'

export default ({ history }) => {
  const submit = e => {
    e.preventDefault();

    const params = {
      term: this.termNode.value,
      location: this.locNode.value
    };

    let query = [];
    Object.keys(params).forEach(key => {
      let el = `${key}=${params[key]}`;
      query.push(el);
    });
    query = query.join('&');

    if (query) history.push(`/shops?${query}`);
  }

  return (
    <form className='searchbar'
      onSubmit={e => submit(e)}
    >
      <b>Find</b>
      <input 
        placeholder='Boba' 
        maxLength={30} 
        ref={node => this.termNode = node}
        required
      />
      <b>Near</b>
      <input 
        placeholder='San Leandro' 
        maxLength={30} 
        ref={node => this.locNode = node}
        required
      />
      <button>Go</button>
    </form>
  );
}