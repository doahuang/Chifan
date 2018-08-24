import React from 'react';

export default class Header extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    let loginStatus = this.props.currentUser ? 
    <a href='/api/logout'>Log out</a> : 
    <a href='/auth/google'>Log in with Google</a>;

    return (
      <div className='header'>
        <a href='/'><h1>Home</h1></a>
        <ul>
          <li>{ loginStatus }</li>
        </ul>
      </div>
    );
  }
}
