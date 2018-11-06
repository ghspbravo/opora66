import React, { Component } from 'react'

import partner from '../res/partner-1.png'

export default class Partners extends Component {
    render() {
        return (
            <section id="partners" className="section-dark" style={{ padding: 0 }}>
                <div className="section-content">
                    <div className="row">
                        <section className="col-lg-7 d-flex justify-content-center">
                            <div className="col-lg-9">
                                <div className="section-title title-center">
                                    <div className="section-name">Мы строим доверие</div>
                                    <div className="section-description">Наши партнеры</div>
                                </div>
                                <div className="partners-wrapper">
                                    <div className="row d-flex no-gutters partners-list justify-content-center">
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                    </div>
                                    <div className="row d-flex no-gutters partners-list justify-content-center">
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                        <div className="partner-item d-flex align-content-center justify-items-center">
                                            <img src={partner} alt="partner logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center">
                            <iframe title='opora' width="100%" height="100%" src="https://www.youtube.com/embed/7Qhz-HzyhUs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
