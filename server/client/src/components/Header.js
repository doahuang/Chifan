import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>Header</h1>
        <ul>
          <li>Sign in with Google</li>
        </ul>
      </div>
    );
  }
}