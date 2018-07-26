import React, { Component } from 'react';
import LeftNav from './components/LeftNav'
import { Router, Route, Link } from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">edit</h1>
        </header>
          <LeftNav name='leftnav'/>
      </div>
    );
  }
}

export default App;
