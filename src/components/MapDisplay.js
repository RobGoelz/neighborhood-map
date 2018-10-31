import React, {Component} from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import apikey from '../data/apikey.json'
import foursquare from '../data/foursquare.json'


const MAP_KEY = apikey.key;
const FS_CLIENT = foursquare.clientID;
const FS_SECRET = foursquare.clientSecret;
const FS_VERSION = "20180323";
const snazzyMapStyles = require("../data/snazzyMapStyles.json");

class MapDisplay extends Component {
  state ={
    map: null,
    markers: [],
    markerProps: [],
    activeMarker: null,
    activeMarkerProps: null,
    showingInfoWindow: false
  }

  componentDidMount = () => {
  }

  mapReady = (props, map) => {
    // Saves the map reference in state and prepares the location markers
    this.setState({map});
    this.updateMarkers(this.props.locations);
  }

  closeInfoWindow = () => {
    this.state.activeMarker && this.state.activeMarker.setAnimation(null);
    this.setState({showingInfoWindow: false, activeMarker: null,
      activeMarkerProps: null});
  }

  onMarkerClick = (props, marker, e) => {
    this.closeInfoWindow();

    this.setState({showingInfoWindow: true, activeMarker: marker,
      activeMarkerProps: props});
  }

  updateMarkers = (locations) => {
    // check for locations, if missing, quit
    if (!locations){
      return;
    }

    // forEach loop used to remove existing markers from the map
    this.state.markers.forEach(marker => marker.setMap(null));

    // Iterate over the locations and create references to marker properties
    // that can be used for reference in user interaction.
    // Add markers to map.
    let markerProps = [];
    let markers = locations.map((location, index) => {
      let mrkrPropsHolder = {
        key: index,
        index,
        name: location.name,
        position: location.pos,
        url: location.url
      };
      markerProps.push(mrkrPropsHolder);

      let animation = this.props.google.maps.Animation.DROP;
      let marker = new this.props.google.maps.Marker({
        position: location.pos,
        map: this.state.map,
        animation
      });

      marker.addListener('click', () => {
        this.onMarkerClick(mrkrPropsHolder, marker, null);
      });
      return marker;
    })

    this.setState({markers, markerProps});
  }

  render = () => {
    const center = {
      lat: this.props.lat,
      lng: this.props.lon
    }

    let activeMProps = this.state.activeMarkerProps;

    return (
      <Map
        role='application'
        aria-label='map'
        onReady={this.mapReady}
        google={this.props.google}
        styles={snazzyMapStyles}
        initialCenter={center}
        onClick={this.closeInfoWindow}>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.closeInfoWindow}>
            <div>
              <h3>{activeMProps && activeMProps.name}</h3>
              {activeMProps && activeMProps.url
                ? (
                  <a href={activeMProps.url}>See website</a>
                ) : ""}
            </div>
          </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(MapDisplay);
