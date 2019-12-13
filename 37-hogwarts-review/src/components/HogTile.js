import React, { Component } from 'react'

import piggySmalls from '../hog-imgs/piggy_smalls.jpg'

class HogTile extends Component {
  state = {
    showInfo: false
  }

  showInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    return (
      <div className="pigTile">
        <h1>{this.props.hog.name}</h1>
        <img src={piggySmalls} />
        {this.state.showInfo &&
          <div className="hogDetails">
            <p>Specialy: {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased.toString()}</p>
            <p>Weight: {this.props.hog.weight}</p>
            <p>Achievement: {this.props.hog["highest medal achieved"]}</p>
          </div>
        }
        <button onClick={this.showInfo}>Show Info</button>
      </div>
    )
  }
}

export default HogTile