import React from 'react';

export default ({ history }) => {
  const click = () => history.push('/shops');

  return (
    <form className='searchbar'>
      <b>Find</b>
      <input placeholder='Boba' maxLength={30} />
      <b>Near</b>
      <input placeholder='San Leandro' maxLength={30} />
      <button onClick={click}>Go</button>
    </form>
  );
}