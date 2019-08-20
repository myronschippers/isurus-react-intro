import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ReactLink from './components/ReactLink/ReactLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ReactLink />
      </div>
    );
  }
}

export default App;
