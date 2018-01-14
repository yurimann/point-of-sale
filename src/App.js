import React, { Component } from 'react';
import Keypad from './Keypad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">POS Sandbox</h1>
        </header>
        <Keypad />
      </div>


    );
  }
}

export default App;
