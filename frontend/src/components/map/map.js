import React, { Component } from 'react'

export default class Map extends Component {
  google = window.google;

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12
    };
    
    this.map = new this.google.maps.Map(this.refs.mapNode, mapOptions);
  }
  render() {
    return (
      <div className='map-container'>
        <div className='sticky'>
          <div id='map' ref='mapNode'>
            Google Maps
          </div>
        </div>
      </div>
    );
  }
}