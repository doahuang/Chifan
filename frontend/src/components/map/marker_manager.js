export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(shops) {
    // remove old markers
    Object.keys(this.markers)
      .filter(id => !shops[id])
      .forEach(id => this.removeMarker(this.markers[id]));

    // create marker for new shops
    Object.keys(shops)
      .filter(id => !this.markers[id])
      .forEach(id => this.createMarkerFrom(shops[id]));

    // reset labels
    Object.keys(shops)
      .forEach((id, i) => this.markers[id].setLabel(`${i + 1}`));
  }

  createMarkerFrom(shop) {
    const { latitude, longitude } = shop.coordinates;
    const google = window.google;

    let position = new google.maps.LatLng(latitude, longitude);

    const markerOptions = {
      position,
      id: shop.id,
      title: shop.name
    };

    let marker = new google.maps.Marker(markerOptions);
    marker.setMap(this.map);

    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id];
  }
}
