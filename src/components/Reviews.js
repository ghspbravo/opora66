import React, { Component } from 'react'

import achieve_icon_1 from '../res/achieve-icon-1.png'
import achieve_icon_2 from '../res/achieve-icon-2.png'
import achieve_icon_3 from '../res/achieve-icon-3.png'
import achieve_icon_4 from '../res/achieve-icon-4.png'
import achieve_icon_5 from '../res/achieve-icon-5.png'
import achieve_icon_6 from '../res/achieve-icon-6.png'

import person from '../res/management_person.png'

import facebook from '../res/social-fb.svg'

export default class Reviews extends Component {
    componentDidMount() {
        window.$('.review-wrapper').slick({
            dots: true,
            arrows: false,
        });
    }
    render() {
        return (
            <div id="#reviews">
                <div className="row no-gutters">
                    <div className="section-acsent-light col-12 col-lg-6 col-xl-4">
                        <div className="row achievments-wrapper">
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">16 лет</h4>
                                <p className="achieve-description">Успешной работы</p>
                                <img className="achieve-icon" src={achieve_icon_1} alt="achieve icon" />
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">450тыс.+</h4>
                                <p className="achieve-description">Активных предпринимателей со всей России</p>
                                <img className="achieve-icon" src={achieve_icon_2} alt="achieve icon" />
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">100+</h4>
                                <p className="achieve-description">Отраслевых и предпринимательских объединений</p>
                                <img className="achieve-icon" src={achieve_icon_3} alt="achieve icon" />
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">85</h4>
                                <p className="achieve-description">Региональных отделений</p>
                                <img className="achieve-icon" src={achieve_icon_4} alt="achieve icon" />
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">400+</h4>
                                <p className="achieve-description">Местных отделений</p>
                                <img className="achieve-icon" src={achieve_icon_5} alt="achieve icon" />
                            </div>
                            <div className="achievement-item flex-column d-flex align-items-center col-6">
                                <h4 className="achieve-number">19</h4>
                                <p className="achieve-description">Представителей в 25 странах мира</p>
                                <img className="achieve-icon" src={achieve_icon_6} alt="achieve icon" />
                            </div>
                        </div>
                    </div>
                    <section className="d-flex flex-column justify-content-center section-content section-dark col-lg-6 col-xl-8" style={{ paddingBottom: '30px' }} >
                        <div className="section-title section-title-simplified title-center">
                            <h1 className="section-name">Отзывы</h1>
                            <h2 className="section-description">Мнения наших коллег</h2>
                        </div>
                        <div className="review-wrapper" style={{ marginTop: '20px' }}>
                            <div className="row no-gutters justify-content-center review-item d-flex">
                                <img className="author-photo" src={person} alt="author" />
                                <p className="review-text">
                                    Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                </p>
                                <div className="review-author-info" style={{ marginTop: '50px' }}>
                                    <div className="author-name">Имя Фамилия</div>
                                    <div style={{ marginTop: '5px' }} className="author-occupation">Чем занимается</div>
                                    <div className="row justify-content-center author-social" style={{ marginTop: '20px' }}>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters justify-content-center review-item d-flex">
                                <img className="author-photo" src={person} alt="author" />
                                <p className="review-text">
                                    Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                </p>
                                <div className="review-author-info" style={{ marginTop: '50px' }}>
                                    <div className="author-name">Имя Фамилия</div>
                                    <div style={{ marginTop: '5px' }} className="author-occupation">Чем занимается</div>
                                    <div className="row justify-content-center author-social" style={{ marginTop: '20px' }}>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
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
