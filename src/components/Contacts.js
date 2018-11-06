import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <section id="contacts" className="section-side-left">
                <div className="section-content container">
                    <div className="row">
                        <div className="col-lg-6 image-bordered">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8779a0f33347ba79c54110610d651007b6c11ce7ac56ad7dc8284be4b6e54611&amp;source=constructor" width="570" height="620" frameborder="0"></iframe>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h1 className="section-name">Свяжись с нами</h1>
                                <h2 className="section-description">Запросить бесплатную консультацию</h2>
                            </div>
                            <form id='contact-form' action="post">
                                <div className="row contact-input-row">
                                    <div className="col-sm-6">
                                        <input className="contact-input-item" type="text" placeholder="Имя"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="contact-input-item" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row contact-input-row">
                                    <div className="col-sm-6">
                                        <input className="contact-input-item" type="text" placeholder="Телефон"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="contact-input-item" type="text" placeholder="Тема" />
                                    </div>
                                </div>
                                <div className="row contact-input-row no-gutters">
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
