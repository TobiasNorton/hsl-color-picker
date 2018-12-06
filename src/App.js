import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hueValue: 185,
      saturationValue: 50,
      lightnessValue: 75,
      opacityValue: 1
    }
  }

  changeHueValue = event => {
    this.setState({
      hueValue: event.target.value
    })
  }

  changeSaturationValue = event => {
    this.setState({
      saturationValue: Number.parseInt(event.target.value)
    })
  }

  changeLightnessValue = event => {
    this.setState({
      lightnessValue: Number.parseInt(event.target.value)
    })
  }

  changeOpacityValue = event => {
    this.setState({
      opacityValue: Number.parseFloat(event.target.value)
    })
  }

  randomColor = () => {
    this.setState({
      hueValue: Math.floor(Math.random() * 360),
      saturationValue: Math.floor(Math.random() * 100),
      lightnessValue: Math.floor(Math.random() * 100),
      opacityValue: Math.random()
    })
  }

  render() {
    return (
      <body>
        <h1
          style={{
            color: `hsla(${this.state.hueValue}, ${this.state.saturationValue}%, ${
              this.state.lightnessValue
            }%, ${this.state.opacityValue})`
          }}
        >
          HSLa Color Picker
        </h1>
        <div className="center">
          <button onClick={this.randomColor}>Generate a Random Color</button>
        </div>
        <div
          className="box"
          style={{
            backgroundColor: `hsla(${this.state.hueValue}, ${this.state.saturationValue}%, ${
              this.state.lightnessValue
            }%, ${this.state.opacityValue})`
          }}
        >
          <div className="colors ">
            <label htmlFor="Hue">Hue - {this.state.hueValue}</label>
            <input
              name="Hue"
              type="range"
              min="0"
              max="360"
              onChange={this.changeHueValue}
              value={this.state.hueValue}
            />

            <label htmlFor="Saturation">Saturation - {this.state.saturationValue}%</label>
            <input
              name="Saturation"
              type="range"
              min="0"
              max="100"
              onChange={this.changeSaturationValue}
              value={this.state.saturationValue}
            />

            <label htmlFor="Lightness">Lightness - {this.state.lightnessValue}%</label>
            <input
              name="Lightness"
              type="range"
              min="0"
              max="100"
              onChange={this.changeLightnessValue}
              value={this.state.lightnessValue}
            />

            <label htmlFor="Opacity">Opacity - {Math.floor(this.state.opacityValue * 100)}%</label>
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
        <p>Copy this into your CSS:</p>
        <p className="bottom">{`hsla(${this.state.hueValue}, ${this.state.saturationValue}%, ${
          this.state.lightnessValue
        }%, ${this.state.opacityValue.toFixed(2)})`}</p>
      </body>
    )
  }
}

export default App
