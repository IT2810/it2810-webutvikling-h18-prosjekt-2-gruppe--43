import React, { Component } from 'react';
import './header.css';
import SelectOption from '../select-option/select-option';


class Header extends Component {
  filterChange(value, type){
    switch(type) {
      case "image":
        this.setState({imageCategory: value}, () => { this.props.onFilterChange(this.state) })
        break;
      case "sound":
        this.setState({soundCategory: value}, () => { this.props.onFilterChange(this.state) })
        break;
      case "text":
        this.setState({textCategory: value}, () => { this.props.onFilterChange(this.state) })
        break;
      default:
        break;
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      imageCategory: 1,
      soundCategory: 1,
      textCategory: 1,
    }
  }
  render() {
    let options = [1,2,3];
    return (
      <div className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="filter">
          <label for="image">Image</label>
          <SelectOption id="image" filter={this.props.filter} onChange={e => this.filterChange(e,"image")} name="imageCategory" options={options}/>
          <label for="sound">Sound</label>
          <SelectOption id="sound" filter={this.props.filter} onChange={e => this.filterChange(e,"sound")} name="textCategory" options={options}/>
          <label for="text">Text</label>
          <SelectOption id="text" filter={this.props.filter} onChange={e => this.filterChange(e,"text")} name="soundCategory" options={options}/>
        </div>
      </div>
    );
  }
}

export default Header;