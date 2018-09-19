import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import AssetContainer from './components/asset-container/asset-container'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          <AssetContainer tabs={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6']} />
        </div>
      </div>
    );
  }
}

export default App;
