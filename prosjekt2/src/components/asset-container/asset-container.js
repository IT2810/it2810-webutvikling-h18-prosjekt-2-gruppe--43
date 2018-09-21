import React, { Component } from 'react';
import './asset-container.css';

class AssetContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 0
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
    this.setState({ currentTab: index })
  }

  render() {
    const tabs = this.computeTabs(this.props.assets)

    // Create tab elements
    let tabsElmt
    if (tabs && tabs.tabs) {
      tabsElmt = tabs.tabs.map((tab, ind) => {
        return <div className="tab" key={ ind } onClick={evt => this.selectTab(evt, ind)}>{ tab }</div>
      })
    } else {
      tabsElmt = <div className="tabs-loading"></div>
    }

    // Extra tabs
    const extra = tabs && tabs.extra ? <div className="tab extra">{ tabs.extra } more</div> : null
    // Load assets
    let image = null
    let sound = null
    let text = null
    let textTitle = null

    if (this.props.assets && this.state.currentTab >= 0 && this.state.currentTab < this.props.assets.length) {
      const asset = this.props.assets[this.state.currentTab]
      const imgAsset = asset[0]
      const sndAsset = asset[1]
      const txtAsset = asset[2]
      console.log(asset)

      image = <img src={ imgAsset.content } alt={ imgAsset.title } />
      sound = (
        <audio src={ sndAsset.content } controls>
          Your browser doesn't seem to support HTML5 audio.
        </audio>
      )
      textTitle = <h2>{ txtAsset.title }</h2>
      text = <p dangerouslySetInnerHTML={{__html: txtAsset.content}}></p>
    }

    return (
      <div className="asset-container">
        <section className="tabs">
          { tabsElmt }
          { extra }
        </section>
        <section className="asset">
          <div className="image">{ image }</div>
          <div className="text">{ textTitle }{ text }</div>
          <div className="sound">{ sound }</div>
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