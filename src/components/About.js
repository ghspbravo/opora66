import React, { Component } from 'react'

import about from '../res/about.jpg'

export default class About extends Component {
    render() {
        return (
            <section id="about" className="section-side-left">
                <div className="container-fluid section-content">
                    <div className="row">
                        <div className="col-lg-6 col-12 image-bordered about-image">
                            <img src={about} alt="about preview"/>
                        </div>
                        <div className="col-lg-6 col-12"></div>
                    </div>
                </div>
            </section>
        )
    }
}
