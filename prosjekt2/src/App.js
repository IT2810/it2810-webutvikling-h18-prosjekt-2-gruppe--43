import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import AssetContainer from './components/asset-container/asset-container'
const filter = require('./components/select-option/filter')

class App extends Component {
  render() {
    filter(1, 1, 1).then(res => console.log(res)).catch(err => console.error(err))
    return (
      <div className="app">
        <Header/>
        <div className="content">
          <AssetContainer/>
        </div>
      </div>
    );
  }
}

export default App;
