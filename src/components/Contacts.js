import React, { Component } from 'react'

import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

async function sendMail(name, email, phonenumber, theme, message) {
    return await fetch('http://opora66.ru/mail.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "phonenumber": phonenumber,
            "theme": theme,
            "message": message
        })
    }).then(data => {
        return data.status;
    });
}


export default class Contacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            theme: '',
            message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        sendMail(
            this.state.name,
            this.state.email,
            this.state.phonenumber,
            this.state.theme,
            this.state.message
        ).then((code) => {
            if (code === 200) window.alert('Отправлено успешно!')
            else window.alert('Возникли проблемы с отправкой')
        })
    }

    handleInputChange = e => {
        const stateName = e.target.dataset["for"]
        const value = e.target.value
        this.setState((prevState) => {
            return prevState[stateName] = value
        })
    }

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
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h1 className="section-name">Свяжись с нами</h1>
                                <h2 className="section-description">Запросить бесплатную консультацию</h2>
                            </div>
                            <form id='contact-form' method="post" onSubmit={this.handleSubmit}>
                                <div className="row contact-input-row">
                                    <div className="col-sm-6">
                                        <input onChange={this.handleInputChange} data-for="name" value={this.state.name}
                                            className="contact-input-item" type="text" placeholder="Имя" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input onChange={this.handleInputChange} data-for="email" value={this.state.email}
                                            className="contact-input-item" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row contact-input-row">
                                    <div className="col-sm-6">
                                        <input onChange={this.handleInputChange} data-for="phonenumber" value={this.state.phonenumber}
                                            className="contact-input-item" type="text" placeholder="Телефон" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input onChange={this.handleInputChange} data-for="theme" value={this.state.theme}
                                            className="contact-input-item" type="text" placeholder="Тема" />
                                    </div>
                                </div>
                                <div className="row contact-input-row no-gutters">
                                    <textarea onChange={this.handleInputChange} data-for="message" value={this.state.message}
                                        className="contact-input-text" name="comment" id="comment" rows="2" placeholder="Я хотел бы обсудить" />
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
