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

    return assets.map(ass => ass[0].title)
  }

  scrollAssets(evt, dir, max) {
    let addend
    switch (dir) {
      case 'start':
        addend = -this.state.currentTab; break
      case 'previous':
        addend = this.state.currentTab === 0 ? 0 : -1; break
      case 'next':
        addend = this.state.currentTab === max - 1 ? 0 : 1; break
      case 'end':
        addend = max - this.state.currentTab - 1; break
      default:
        addend = 0; break
    }

    this.setState({ currentTab: this.state.currentTab + addend })
  }

  render() {
    const tabs = this.computeTabs(this.props.assets)
    const number = this.props.assets ? <span className="asset-number">{ this.state.currentTab + 1 }/{ this.props.assets.length }</span> : null

    // Create tab elements
    let tabsElmt
    if (tabs) {

      tabsElmt = (
        <section className="tabs">
          <div className="tab tab-start" onClick={ evt => this.scrollAssets(evt, 'start') }></div>
          <div className="tab tab-previous" onClick={ evt => this.scrollAssets(evt, 'previous') }></div>
          <div className="tab tab-current">{ number }&nbsp;{ tabs[this.state.currentTab] }</div>
          <div className="tab tab-next" onClick={ evt => this.scrollAssets(evt, 'next', this.props.assets.length) }></div>
          <div className="tab tab-end" onClick={ evt => this.scrollAssets(evt, 'end', this.props.assets.length) }></div>
        </section>
      )
    } else {
      tabsElmt = <div className="tabs-loading"></div>
    }

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

      image = <img src={ imgAsset.content } alt={ imgAsset.title } title={ imgAsset.title } />
      sound = (
        <audio src={ sndAsset.content } title={ sndAsset.title } controls>
          Your browser doesn't seem to support HTML5 audio.
        </audio>
      )
      textTitle = <h2>{ txtAsset.title }</h2>
      text = <p dangerouslySetInnerHTML={{__html: txtAsset.content}}></p>
    }

    return (
      <div className="asset-container">
        { tabsElmt }
        <section className="asset">
          <div className="image">{ image }</div>
          <div className="text">{ textTitle }{ text }</div>
          <div className="sound">{ sound }</div>
        </section>
        {/* <section className="author-label label">Utgiver</section>
        <section className="author-info info">Whatever</section>
        <section className="source-label label">Kilde</section>
        <section className="source-info info">Whatever</section> */}
      </div>
    );
  }
}

export default AssetContainer;