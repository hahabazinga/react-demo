import React, { Component } from 'react';
import Main from './router/index'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: ''
    }
    this.getCountry = this.getCountry.bind(this);
  }
  getCountry() {
    fetch('https://ipapi.co/8.8.8.8/json/').then(response => response.json()).then(data => {

      this.setState({
          text:data.country_name
      })
     
    }).catch(e => alert(e.message));
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
          <button onClick={() => this.getCountry()}>swTest</button>
          <h3>{this.state.country}</h3>
          </h1>
        </header>
        <Main/>

      </div>
    );
  }
}

export default App;
