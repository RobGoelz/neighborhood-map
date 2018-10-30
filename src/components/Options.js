import React, {Component} from 'react';

class Options extends Component {
  render () {
    return (
      <div className='container'>
        <div className='options-box'>
        <h1>Find Your Morgantown Spot!</h1>
          <div>
            <input id='show-listings' type='button' value='Show Listings' />
            <input id='hide-listings' type='button' value='Hide Listings' />
          </div>
        <hr />
          <div>
            <span className="text"> Draw a shape to search within it for watering holes!</span>
            <input id="toggle-drawing"  type="button" value="Drawing Tools" />
          </div>
        <hr />
          <div>
            <input id="zoom-to-area-text" type="text" placeholder="Enter your favorite area!" />
            <input id="zoom-to-area" type="button" value="Zoom" />
          </div>
        <hr />
          <div>
            <span className="text"> Within </span>
            <select id="max-duration">
              <option value="10">10 min</option>
              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="60">1 hour</option>
            </select>
            <select id="mode">
              <option value="DRIVING">drive</option>
              <option value="WALKING">walk</option>
              <option value="BICYCLING">bike</option>
              <option value="TRANSIT">transit ride</option>
            </select>
            <span className="text">of</span>
            <input id="search-within-time-text" type="text" placeholder="Ex: WVU: W Virginia Ave, Morgantown, WV 26501" />
            <input id="search-within-time" type="button" value="Go" />
          </div>
        <hr />
          <div>
            <span className="text">Search for nearby bars</span>
            <input id="places-search" type="text" placeholder="Ex: Irish pub" />
            <input id="go-places" type="button" value="Go" />
          </div>
        </div>
        <div id="map"></div>
      </div>
    );
    }
}

export default Options;
