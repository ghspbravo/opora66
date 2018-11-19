import React, { Component } from 'react'

import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

export default class Contacts extends Component {
    render() {
        return (
            <section id="contacts" className="section-side-left">
                <div className="section-content container">
                    <div className="row">
                        <div className="col-lg-6 image-bordered contacts-map">
                            <YMaps>
                                <Map defaultState={{
                                    center: [56.843747, 60.571414],
                                    zoom: 14
                                }}
                                width="100%"
                                height="100%">
                                    <Placemark geometry={[56.843747, 60.571414]} />
                                    <ZoomControl
                                        options={{
                                            size: 'small',
                                            zoomDuration: 1000,
                                        }} />
                                </Map>
                            </YMaps>
                                {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae25c5052816f0bd3bbd1185f79a057cdac599aa88a9e05b9bc8736d86a40d408&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe> */}
                        </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h1 className="section-name">Свяжись с нами</h1>
                                    <h2 className="section-description">Запросить бесплатную консультацию</h2>
                                </div>
                                <form id='contact-form' action="post">
                                    <div className="row contact-input-row">
                                        <div className="col-sm-6">
                                            <input className="contact-input-item" type="text" placeholder="Имя" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="contact-input-item" type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row contact-input-row">
                                        <div className="col-sm-6">
                                            <input className="contact-input-item" type="text" placeholder="Телефон" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="contact-input-item" type="text" placeholder="Тема" />
                                        </div>
                                    </div>
                                    <div className="row contact-input-row no-gutters">
                                        <textarea className="contact-input-text" name="comment" id="comment" rows="2" placeholder="Я хотел бы обсудить" />
                                    </div>
                                    <button style={{ marginTop: '50px' }} className="button button-light">Отправить</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </section>
                )
            }
        }
