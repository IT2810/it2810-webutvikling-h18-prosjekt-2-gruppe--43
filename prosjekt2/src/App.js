import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import AssetContainer from './components/asset-container/asset-container'

const filter = require('./components/select-option/filter')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: {
        imageCategory: 1,
        soundCategory: 1,
        textCategory: 1
      },
      assets: null
    }
  }

  render() {

    return (
      <div className="app">
        <Header/>
        <div className="content">
          <AssetContainer assets={ this.state.assets }/>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // Get randomly filtered elements on first load
    filter(this.state.filter.imageCategory, this.state.filter.soundCategory, this.state.filter.textCategory)
      .then(res => {
        this.setState({ assets: res })
      })
      .catch(err => console.error(err))

    // Remember: set filter initial values to randomized ints
  }
}

export default App;
