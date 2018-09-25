import React, { Component } from 'react'

export default class ShopListItem extends Component {
  state = {
    liked: this.props.liked
  }

  componentWillReceiveProps(next) {
    if (next.liked !== this.state.liked) 
      return this.setState({ liked: next.liked })
  }

  like() {
    const { shop: { _id}, like, unlike } = this.props;
    return this.state.liked ? unlike(_id) : like(_id);
  }

  liked() {
    this.setState({ liked: !this.state.liked });
  }

  handleLike() {
    this.like().then(this.liked());
  }

  render() {
    const { shop } = this.props;
    
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
        <button onClick={() => this.handleLike()}>
          { this.state.liked ? 'Unlike' : 'Like' }
        </button>
      </li>
    )
  }
}