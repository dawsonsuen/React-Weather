import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header  from './Header.js';
import Footer from './Footer.js';
import WeatherChannel from './WeatherChannel.js';
class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}


export default App;
