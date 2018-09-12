import React, { Component } from 'react';
import './asset-container.css';

class AssetContainer extends Component {
  render() {
    return (
      <div className="asset-container">
        <section className="asset"></section>
        <section className="author-label label">Utgiver</section>
        <section className="author-info info">Whatever</section>
        <section className="source-label label">Kilde</section>
        <section className="source-info info">Whatever</section>
      </div>
    );
  }
}

export default AssetContainer;