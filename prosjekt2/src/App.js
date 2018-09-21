import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import AssetContainer from './components/asset-container/asset-container'

const filter = require('./components/select-option/filter')

// Fisher-Yates shuffle (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
function shuffle(array) {
  let counter = array.length

  // While there are elements in the array
  while (counter > 0) {
      let index = Math.floor(Math.random() * counter)
      counter--

      let temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
  }

  return array
}


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

  updateFilter() {
    filter(this.state.filter.imageCategory, this.state.filter.soundCategory, this.state.filter.textCategory)
      .then(res => {
        this.setState({ assets: shuffle(res) })
      })
      .catch(err => console.error(err))
  }

  handleFilterChange(change) {
    this.setState({
      filter: change,
    }, () => {
      this.updateFilter();
    });
  }
  render() {

    return (
      <div className="app">
        <div className="content"  filter={this.state.filter}>
          <Header filter={this.state.filter} onFilterChange={this.handleFilterChange.bind(this)}/>
          <AssetContainer assets={ this.state.assets }/>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.updateFilter();
  }
}

export default App;
