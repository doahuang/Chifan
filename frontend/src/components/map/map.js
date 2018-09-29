import React, { Component } from 'react'
import MarkerManager from './marker_manager';

export default class Map extends Component {  
  componentDidMount() {
    const { center: {latitude, longitude}, zoom } = this.props;
    
    const mapOptions = {
      center: {
        lat: latitude || 37.7758,
        lng: longitude || -122.435
      },
      zoom: zoom || 11
    };
    
    const google = window.google;
    this.map = new google.maps.Map(this.refs.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate(prev) {
    const { center: { latitude, longitude }} = prev;
    
    const { center, shops } = this.props;
    const lat = center.latitude;
    const lng = center.longitude;

    if (latitude !== lat || longitude !== lng)
      this.map.panTo({ lat, lng })

    this.MarkerManager.updateMarkers(shops);
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