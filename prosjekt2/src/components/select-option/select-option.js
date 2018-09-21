import React, { Component } from 'react';
import './select-option.css';

class SelectOption extends Component {

  constructor(props){
    super(props);

    this.optionList = this.props.options.map(option => {
      return (
        <option value={option}>
          {option}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="select-option">
        <select name={this.props.name} onChange={e => { this.props.onChange(parseInt(e.target.value))}}>
          {this.optionList}
        </select>
      </div>
    );
  }
}

export default SelectOption;
