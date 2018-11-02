import React, { Component } from 'react'

import map from '../res/map-placeholder.png'

export default class Contacts extends Component {
    render() {
        return (
            <section id="contacts" className="section-side-left">
                <div className="section-content container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={map} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h1 className="section-name">Свяжись с нами</h1>
                                <h2 className="section-description">Запросить бесплатную консультацию</h2>
                            </div>
                            <form id='contact-form' action="post">
                                <div className="row contact-input-row">
                                    <div className="col-lg-6">
                                        <input className="contact-input-item" type="text" placeholder="Имя"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input className="contact-input-item" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row contact-input-row">
                                    <div className="col-lg-6">
                                        <input className="contact-input-item" type="text" placeholder="Телефон"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input className="contact-input-item" type="text" placeholder="Тема" />
                                    </div>
                                </div>
                                <div class="row contact-input-row no-gutters">
                                    <textarea className="contact-input-text" name="comment" id="comment" rows="2" placeholder="Я хотел бы обсудить" />
                                </div>
                                <button style={{marginTop: '50px'}} className="button button-light">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
