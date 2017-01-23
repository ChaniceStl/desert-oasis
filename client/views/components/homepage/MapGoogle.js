import React from 'react';
// import { Link } from 'react-router';

const MapGoogle = React.createClass({

  componentDidMount() {
    console.log('I am connected!')
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgzPBYgmNZ1ed5tEHhGfdHNuWuD_VUM6s&callback=initMap')
  },

  initMap() {
    var that = this;

    console.log("initMap Is Now Running")
    // console.log('props:',that.props.marketArray)
    console.log()
    console.log('_____')
    var currentAddress = { lat: that.props.mapLat, lng: that.props.mapLng};
    var zoom = 15;
    var map = new google.maps.Map((that.refs.map), {
      zoom: zoom,
      gestureHandling: "none",
      center: currentAddress
    });
    var marker = new google.maps.Marker({
      position: currentAddress,
      map: map
    });
  },

  render() {

  	console.log('LONG: ' + this.props.mapLat)
  	console.log('LAT: ' + this.props.mapLng)

    const mapStyle = {
      width: 600,
      height: 250,
    };

    return (
      <div>
        <div ref="map" style={mapStyle}></div>
      </div>
    );
  }
});

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default MapGoogle;