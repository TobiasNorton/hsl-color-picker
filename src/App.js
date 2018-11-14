import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hueValue: 25,
      saturationValue: 50,
      lightnessValue: 10
    }
  }

  changeHueValue = event => {
    this.setState({
      hueValue: event.target.value
    })
  }

  changeSaturationValue = event => {
    this.setState({
      saturationValue: event.target.value
    })
  }

  changeLightnessValue = event => {
    this.setState({
      lightnessValue: event.target.value
    })
  }

  render() {
    return (
      <div className="box">
        <h1>HSL Color Picker</h1>
        <div className="colors ">
          <label htmlFor="Hue">Hue</label>
          <input
            name="Hue"
            type="range"
            min="0"
            max="360"
            onChange={this.changeHueValue}
            value={this.state.hueValue}
          />

          <label htmlFor="Saturation">Saturation</label>
          <input
            name="Saturation"
            type="range"
            min="0"
            max="100"
            onChange={this.changeSaturationValue}
            value={this.state.saturationValue}
          />

          <label htmlFor="Lightness">Lightness</label>
          <input
            name="Lightness"
            type="range"
            min="0"
            max="100"
            onChange={this.changeLightnessValue}
            value={this.state.lightnessValue}
          />
        </div>
      </div>
    )
  }
}

export default App
