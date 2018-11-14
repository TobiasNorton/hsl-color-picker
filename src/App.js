import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="box">
        <h1>HSL Color Picker</h1>
        <div className="colors">
          <label htmlFor="Hue">Hue</label>
          <input name="Hue" type="range" />
          <label htmlFor="Saturation">Saturation</label>
          <input name="Saturation" type="range" />
          <label htmlFor="Lightness">Lightness</label>
          <input name="Lightness" type="range" />
        </div>
      </div>
    )
  }
}

export default App
