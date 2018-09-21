import React, { Component } from 'react';
import './asset-container.css';

class AssetContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tabs: this.computeTabs(props.tabs)
    }
  }

  computeTabs(tb) {
    return tb.reduce((acc, cur, ind) => {
      if (ind < 4) acc.tabs.push(cur)
      else acc.extra++
      return acc
    }, { tabs: [], extra: 0 })
  }

  render() {
    const tabs = this.state.tabs
    const extra = tabs.extra ? <div className="tab extra">{ tabs.extra } more</div> : null

    return (
      <div className="asset-container">
        <section className="tabs">
          {
            tabs.tabs.map((tab, index) => {
              return <div className="tab" key={ index }>{ tab }</div>
            })
          }
          {
            extra
          }
        </section>
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