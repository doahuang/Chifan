import React, { Component } from 'react'
import MarkerManager from './marker_manager';

export default class Map extends Component {  
  componentDidMount() {
    const { shops, center, zoom } = this.props;
    
    const mapOptions = {
      center: {
        lat: center.latitude || 37.7758,
        lng: center.longitude || -122.435
      },
      
      zoom: zoom || 11
    };
    
    const google = window.google;
    this.map = new google.maps.Map(this.refs.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(shops);
  }

  componentWillReceiveProps(next) {
    const { center: { latitude, longitude }} = this.props;
    const lat = next.center.latitude;
    const lng = next.center.longitude;

    if (latitude !== lat || longitude !== lng)
      this.map.panTo({ lat, lng })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.shops);
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