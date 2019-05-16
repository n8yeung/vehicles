import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import VehiclesContainer from './VehiclesContainer/VehiclesContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div class="container">
          <Header />
          <VehiclesContainer />
        </div>
      </div>
    );
  }
}

export default App;
