import React, { Component } from 'react'

export default class ShopListItem extends Component {
  state = {
    liked: this.props.liked
  }

  componentWillReceiveProps(next) {
    if (next.liked !== this.state.liked) 
      this.setState({ liked: next.liked })
  }

  call() {
    const { shop, like, unlike } = this.props;
    const shopId = shop._id;
    return this.state.liked ? unlike(shopId) : like(shopId);
  }

  toggle() {
    this.setState({ liked: !this.state.liked })
  }

  click() {
    this.call().then(this.toggle());
  }

  render() {
    const { shop, user } = this.props;
    
    let hours = shop.hours.split('\\n');
    hours = hours.map((el, i) => <p key={i}>{el}</p>);

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
        <section>
          {hours}
        </section>
        {
          !user ? null :
          <button onClick={() => this.click()}>
            { this.state.liked ? 'Unlike' : 'Like' }
          </button>
        }
      </li>
    )
  }
}