import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hueValue: 25,
      saturationValue: 50,
      lightnessValue: 10,
      opacityValue: 0.5
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

  changeOpacityValue = event => {
    this.setState({
      opacityValue: event.target.value
    })
  }

  render() {
    return (
      <body
        style={{
          backgroundColor: `hsla(${this.state.hueValue}, ${this.state.saturationValue}%, ${
            this.state.lightnessValue
          }%, ${this.state.opacityValue})`
        }}
      >
        <div className="box">
          <h1>HSL Color Picker</h1>
          <div className="colors ">
            <label htmlFor="Hue">Hue {this.state.hueValue}</label>
            <input
              name="Hue"
              type="range"
              min="0"
              max="360"
              onChange={this.changeHueValue}
              value={this.state.hueValue}
            />

            <label htmlFor="Saturation">Saturation {this.state.saturationValue}%</label>
            <input
              name="Saturation"
              type="range"
              min="0"
              max="100"
              onChange={this.changeSaturationValue}
              value={this.state.saturationValue}
            />

            <label htmlFor="Lightness">Lightness {this.state.lightnessValue}%</label>
            <input
              name="Lightness"
              type="range"
              min="0"
              max="100"
              onChange={this.changeLightnessValue}
              value={this.state.lightnessValue}
            />

            <label htmlFor="Opacity">Opacity {this.state.opacityValue * 100}%</label>
            <input
              name="Opacity"
              type="range"
              min="0"
              max="1.0"
              step=".01"
              onChange={this.changeOpacityValue}
              value={this.state.opacityValue}
            />
          </div>
        </div>
      </body>
    )
  }
}

export default App
