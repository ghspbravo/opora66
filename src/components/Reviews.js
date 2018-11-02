import React, { Component } from 'react'

import achieve_icon from '../res/achieve-icon-1.svg'

import person from '../res/management_person.png'

import facebook from '../res/social-fb.svg'

export default class Reviews extends Component {
    render() {
        return (
            <div id="#reviews">
                <div className="row section-content">
                    <div className="flex-column section-acsent-light" style={{width: '40.1%'}}>
                        <div className="row no-gutters achievments-wrapper">
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.</h4>
                                <p className="achieve-description">Предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon} alt="achieve icon"/>
                            </div>
                        </div>
                    </div>
                    <section className="flex-column" style={{width: '59%'}} className="section-dark">
                        <div className="section-title section-title-simplified title-center">
                            <h1 className="section-name">Отзывы</h1>
                            <h2 className="section-description">Что наши клиенты говорят</h2>
                        </div>
                        <div className="rewievs-wrapper" style={{marginTop: '20px'}}>
                            <div className="row no-gutters justify-content-center review-item">
                                <img className="author-photo" src={person} alt="author photo"/>
                                <p className="review-text">
                                    Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                </p>
                                <div className="review-author-info" style={{marginTop: '50px'}}>
                                    <div className="author-name">Имя Фамилия</div>
                                    <div style={{marginTop: '5px'}} className="author-occupation">Чем занимается</div>
                                    <div className="row justify-content-center author-social" style={{marginTop: '20px'}}>
                                        <a className="author-social-item" href=""><img src={facebook} alt=""/></a>
                                        <a className="author-social-item" href=""><img src={facebook} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
