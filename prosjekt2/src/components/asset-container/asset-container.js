import React, { Component } from 'react';
import './asset-container.css';

class AssetContainer extends Component {
  render() {
    return (
      <div className="asset-container">
        <section className="asset"></section>
        <section className="author-label label"></section>
        <section className="author-info info"></section>
        <section className="source-label label"></section>
        <section className="source-info info"></section>
      </div>
    );
  }
}

export default AssetContainer;