import React, { Component } from 'react';
import './App.css';
import Routes from './route';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
