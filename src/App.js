import React, { Component } from 'react';
import './App.css';
import locations from './data/venues.json'
import MapDisplay from './components/MapDisplay'
import Filter from './components/Filter'

class App extends Component {
  state = {
    lat: 39.629526,
    lon: -79.955897,
    zoom: 13,
    all: locations,
    filtered: null,
    open: false
  }

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: 'absolute',
      left: 10,
      top: 10,
      background: '#f2f2f2',
      padding: 10
    },
    hide: {
      display: 'none'
    },
    header: {
      marginTop: "0px"
    }
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      filtered: this.filterLocations(this.state.all, "")
    });
  }

  toggleDrawer = () => {
    // toggles value controlling drawer display
    this.setState({
      open: !this.state.open
    });
  }

  updateQuery = (query) => {
    this.setState({
      ...this.state,
      selectedIndex: null,
      filtered: this.filterLocations(this.state.all, query)
    });
  }

  filterLocations = (locations, query) => {
    return locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
  }

  clickListItem = (index) => {
    // Set state to reflect selected location
    this.setState({ selectedIndex: index, open: !this.state.open })
  }

  render = () => {
    return (
      <div className="App">
        <div>
          <button aria-label="search" onClick={this.toggleDrawer}
          style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
        <h1 className="banner">
          Morgantown Spots!
        </h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.filtered}
          selectedIndex={this.state.selectedIndex}
          clickListItem={this.clickListItem}/>
        <Filter
          locations={this.state.filtered}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
          filterLocations={this.updateQuery}
          clickListItem={this.clickListItem}/>
      </div>
    );
  }
}

export default App;
