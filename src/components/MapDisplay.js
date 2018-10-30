import React, {Component} from 'react';
import {Map, GoogleAPIWrapper} from 'google-maps-react';
import apikey from '../data/apikey.json'


const MAP_KEY = apikey.key;

export class MapDisplay extends Component {
  render () {
    return (
      <div ref='map'>
        Loading map....
      </div>
    );
  }
}

export default MapDisplay;
