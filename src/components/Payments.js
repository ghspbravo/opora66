import React, { Component } from 'react'

export default class Payments extends Component {
    render() {
        return (
            <section id="payments" className="section-acsent-light">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Пожертвования и членские взносы</h1>
                        <h2 className="section-description">Членские взносы</h2>
                    </div>
                    <div className="row justify-content-center payments-wrapper">
                        <div className="payment-item">
                            <div class="payment-header">
                                <h3 className="payment-name">Стандартный</h3>
                                <p className="payment-price">5000Р <span>/ год</span></p>
                            </div>
                            <div className="payment-content">
                                <p className="payment-content-description">
                                    Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.
                                </p>
                                <div className="d-flex flex-column align-items-center payment-content-list">
                                    <p className="payment-content-list-item">Что включено в пакет</p>
                                    <p className="payment-content-list-item">Что включено в пакет</p>
                                    <p className="payment-content-list-item">Что включено в пакет</p>
                                    <p className="payment-content-list-item">Что включено в пакет</p>
                                </div>
                                <div style={{marginTop: '50px'}} class="payment-accept-button d-flex justify-content-center">
                                    <button className="button button-light">Вступить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
