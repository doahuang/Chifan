export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(shops) {
    Object.values(shops)
      .filter(shop => !this.markers[shop.id])
      .forEach((shop, num) => this.createMarkerFrom(shop, num));
    
    Object.values(this.markers)
      .filter(marker => !shops[marker.id])
      .forEach(marker => this.removeMarker(marker));
  }

  createMarkerFrom(shop, num) {
    const { latitude, longitude } = shop.coordinates;
    const google = window.google;

    let position = new google.maps.LatLng(latitude, longitude);

    const markerOptions = {
      position,
      id: shop.id,
      title: shop.name,
      label: `${num + 1}`
    };

    let marker = new google.maps.Marker(markerOptions);
    marker.setMap(this.map);

    // click listener


    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id];
  }
}
