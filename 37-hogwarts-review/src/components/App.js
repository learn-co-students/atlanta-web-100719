import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogTile from './HogTile';

class App extends Component {
  state = {
    greasedOnly: false, 
    sortByName: false, 
    sortByWeight: false, 
    hideAllHogs: false
  }

  greased = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
  }
  
  sortByName = () => {
    this.setState({
      sortByName: !this.state.sortByName, 
      sortByWeight: false 
    })
  }
  
  sortByWeight = () => {
    this.setState(this.initialState)
    this.setState({
      sortByWeight: !this.state.sortByWeight,
      sortByName: false
    })
  }

  hideAllHogs = () => {
    this.setState({
      hideAllHogs: !this.state.hideAllHogs
    })
  }

  renderPigs = () => {
    if (this.state.hideAllHogs === true) {
      return null
    } else {
      return (
        hogs.sort((currentHog, nextHog) => {
          if (this.state.sortByName === true) {
            if (currentHog.name < nextHog.name) {
              return -1
            } else {
              return 0
          }}
        }).sort((currentHog, nextHog) => {
          if (this.state.sortByWeight === true) {
            if (currentHog.weight < nextHog.weight) {
              return -1
            } else {
              return 0
          }}
        }).filter((hog) => {
          if (this.state.greasedOnly === true) {
            return hog.greased === this.state.greasedOnly
          } else {
            return true 
          }
        }).map((hog, index) => {
          return (
            <HogTile key={index} hog={hog} />
          )
        })
      )
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <button onClick={this.greased}>Greased Only</button>
        <button onClick={this.sortByName}>Sort Alphabetically</button>
        <button onClick={this.sortByWeight}>Sort by Weight</button>
        <button onClick={this.hideAllHogs}>Hide ya Pigs</button>
        { 
          this.renderPigs()
        }
      </div>
    )
  }
}

export default App;
