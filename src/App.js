import React, { Component } from 'react';
import './App.css';
import locations from './data/venues.json'
import MapDisplay from './components/MapDisplay'

class App extends Component {
  state = {
    lat: 39.629526,
    lon: -79.955897,
    zoom: 13,
    all: locations
  }

  render() {
    return (
      <div className="App">
        <h1>
          Morgantown Spots!
        </h1>
        <MapDisplay
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.all}/>
      </div>
    );
  }
}

export default App;
