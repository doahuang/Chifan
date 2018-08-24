import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    let loginStatus = this.props.user ? 
    <a href='/api/logout'>Log out</a> : 
    <a href='/auth/google'>Log in with Google</a>;

    return (
      <div className='header'>
        <Link to={this.props.user ? '/dashboard' : '/'}>
          <h1>Home</h1>
        </Link>
        <ul>
          <li>{ loginStatus }</li>
        </ul>
      </div>
    );
  }
}
