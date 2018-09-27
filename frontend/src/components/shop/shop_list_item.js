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
    const { shop: { id }, like, unlike } = this.props;
    return this.state.liked ? unlike(id) : like(id);
  }

  toggle() {
    this.setState({ liked: !this.state.liked })
  }

  click() {
    this.call().then(this.toggle());
  }

  render() {
    const { shop, user } = this.props;
    const { liked } = this.state;

    return (
      <li>
        <span>
          <img src={shop.image_url} alt='' />
        </span>
        <section>
          <a href={shop.url.split('?')[0]} target='_blank'>
            <b>{shop.name}</b>
          </a>
          <p>{shop.rating} stars</p>
          <p>{shop.review_count} reviews </p>
          <p>{shop.price} </p>
          <p>{shop.display_phone} </p>
          <p>{shop.location.display_address.join(', ')} </p>
          {
            !user ? null :
            <button onClick={() => this.click()}>
              { liked ? `Unlike` : 'Like' }
            </button>
          }
        </section>
      </li>
    )
  }
}