import React, { Component } from 'react';
import './asset-container.css';

class AssetContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: null
    }
  }

  computeTabs(assets) {
    if (!assets) return null

    return assets.reduce((acc, cur, ind) => {
      if (ind < 4) acc.tabs.push(cur[2].title)
      else acc.extra++

      return acc
    }, { tabs: [], extra: 0 })
  }

  selectTab(evt, index) {
    console.log(index)
  }

  render() {
    const tabs = this.computeTabs(this.props.assets)

    let tabsElmt
    if (tabs && tabs.tabs) {
      tabsElmt = tabs.tabs.map((tab, ind) => {
        return <div className="tab" key={ ind } onClick={evt => this.selectTab(evt, ind)}>{ tab }</div>
      })
    } else {
      tabsElmt = <div className="tabs-loading"></div>
    }

    const extra = tabs && tabs.extra ? <div className="tab extra">{ tabs.extra } more</div> : null

    return (
      <div className="asset-container">
        <section className="tabs">
          { tabsElmt }
          { extra }
        </section>
        <section className="asset">

        </section>
        <section className="author-label label">Utgiver</section>
        <section className="author-info info">Whatever</section>
        <section className="source-label label">Kilde</section>
        <section className="source-info info">Whatever</section>
      </div>
    );
  }
}

export default AssetContainer;