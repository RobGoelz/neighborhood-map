import React, {Component} from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import apikey from '../data/apikey.json'
import foursquare from '../data/foursquare.json'
import Options from './Options'


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

  getBusinessInfo = (props, data) => {
    // this looks for matching data in FourSquare for the location/venues
    // compared to what we already have
    return data.response.venues.filter(item => item.name.includes(props.name) ||
    props.name.includes(item.name));
  }

  onMarkerClick = (props, marker, e) => {
    // closes any infowindow already open
    this.closeInfoWindow();

    // section sets variables for use in getting FS data
    let url= `https://api.foursquare.com/v2/venues/search?client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}&radius=100&ll=${props.position.lat},${props.position.lng}&llAcc=100`;
    let headers = new Headers();
    let request = new Request(url, {
      method: 'GET',
      headers
    });

    // create props for the activeMarker
    let activeMarkerProps;
    fetch(request)
      .then(response => response.json())
      .then(result => {
        // get the business reference for the info we want from the FS API,
        // then return
        let spot = this.getBusinessInfo(props, result);
        activeMarkerProps = {
          ...props,
          foursquare: spot[0]
        };

        // gets the images for the businss from FS data if Available
        // if not, just finish setting state with the data we have
        if (activeMarkerProps.foursquare) {
          let url = `https://api.foursquare.com/v2/venues/${spot[0].id}/photos?client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}`;
          fetch(url)
            .then(response => response.json())
            .then (result => {
              activeMarkerProps = {
                ...activeMarkerProps,
                images: result.response.photos
              };
              if (this.state.activeMarker)
                  this.state.activeMarker.setAnimation(null);
              marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
              this.setState({showingInfoWindow: true, activeMarker: marker,
              activeMarkerProps});
            })
        } else {
          marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
          this.setState({showingInfoWindow: true, activeMarker: marker,
          activeMarkerProps});
        }
      })
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
              {activeMProps && activeMProps.images
                ? (
                  <div><img
                    alt={activeMProps.name + " venue picture"}
                    src={activeMProps.images.items[0].prefix + "100x100" + activeMProps.images.items[0].suffix}/>
                    <p>Image from FourSquare</p>
                  </div>
                ) : ""
              }
            </div>
          </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(MapDisplay);
