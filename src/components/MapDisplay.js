import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import apikey from '../data/apikey.json'


const MAP_KEY = apikey.key;
const snazzyMapStyles = require("../data/snazzyMapStyles.json");

class MapDisplay extends Component {
  state ={
    map: null
  }

  componentDidMount = () => {
  }

  mapReady = (props, map) => {
    // Saves the map reference in state and prepares the location markers
    this.setState({map});
  }


  render = () => {
    const style = {
      width: '100%',
      height: '100%',
    }

    const center = {
      lat: this.props.lat,
      lng: this.props.lon
    }

    return (
      <Map
        role='application'
        aria-label='map'
        onReady={this.mapReady}
        google={this.props.google}
        styles={snazzyMapStyles}
        initialCenter={center}
        onClick={this.closeInfoWindow}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(MapDisplay);
