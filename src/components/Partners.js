import React, { Component } from 'react'

import partner from '../res/partner-1.png'
import video from '../res/partners-video.png'

export default class Partners extends Component {
    render() {
        return (
            <section id="partners" className="section-dark" style={{padding: 0}}>
                <div class="section-content">
                    <div class="row">
                        <section class="col-lg-7 d-flex justify-content-center">
                            <div class="col-lg-9">
                                <div className="section-title title-center">
                                    <div className="section-name">Мы строим доверие</div>
                                    <div className="section-description">Наши партнеры</div>
                                </div>
                                <div className="row no-gutters partners-list">
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                    <div className="partner-item d-flex align-content-center justify-items-center">
                                        <img src={partner} alt="partner logo"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="col-lg-5">
                            <img src={video} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
