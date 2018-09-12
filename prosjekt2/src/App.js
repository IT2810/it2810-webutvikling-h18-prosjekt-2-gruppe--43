import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import AssetContainer from './components/asset-container/asset-container'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AssetContainer/>
      </div>
    );
  }
}

export default App;
