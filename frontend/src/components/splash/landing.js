import React from 'react'

import SearchBar from '../searchbar/search_bar';
import Footer from './footer';

export default ({ history }) => {
  return (
    <div className='landing'>
      <h1>Eat anywhere, anytime</h1>
      <SearchBar history={history} />
      <Footer />
    </div>
  );
}
