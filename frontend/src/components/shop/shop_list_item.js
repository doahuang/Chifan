import React, { Component } from 'react'

export default class ShopListItem extends Component {
  state = {
    liked: this.props.liked || false
  }

  componentWillReceiveProps(next) {
    if (next.liked !== this.state.liked) 
      this.setState({ liked: next.liked })
  }

  call() {
    const { shop: { _id }, like, unlike } = this.props;
    return this.state.liked ? unlike(_id) : like(_id);
  }

  toggle() {
    this.setState({ liked: !this.state.liked })
  }

  click() {
    this.call().then(this.toggle());
  }

  render() {
    const { shop, loggedin } = this.props;

    return (
      <li>
        <img src={shop.photo} alt='' />
        <section>
          <b>{shop.name}</b>
          <p>{shop.rating} stars</p>
          <p>{shop.reviews} reviews </p>
          <p>{shop.price} dollar sign</p>
          <p>{shop.phone} </p>
          <p>{shop.address} </p>
        </section>
        {
          !loggedin ? null :
          <button onClick={() => this.click()}>
            { this.state.liked ? 'Unlike' : 'Like' }
          </button>
        }
      </li>
    )
  }
}