import React from 'react';

export default ({ history }) => {
  const click = () => history.push('/shops');

  return (
    <form className='searchbar'>
      <input placeholder='Boba' />
      <b>Near</b>
      <input placeholder='San Leandro' />
      <button onClick={click}>Go</button>
    </form>
  );
}