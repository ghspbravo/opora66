import React, { Component } from 'react'

import Banner from './Banner'
import About from './About';
import Progress from './Progress';
import Publications from './Publications';
import Map from './Map';
import Management from './Management';
import Reviews from './Reviews';
import Steps from './Steps';
import Payments from './Payments';
import Partners from './Partners';
import Contacts from './Contacts';
import Comitets from './Comitets';

export default class Main extends Component {
  render() {
    return (
      <div id="main" className="tingle-content-wrapper">
        <Banner />
        <About />
        <Progress />
        <Comitets server={this.props.server} />
        <Publications server={this.props.server} />
        <Map />
        <Management server={this.props.server} />
        <Reviews />
        <Steps />
        <Payments />
        <Partners server={this.props.server} />
        <Contacts />
      </div>
    )
  }
}
