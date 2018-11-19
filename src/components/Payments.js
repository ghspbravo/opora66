import React, { Component } from 'react'

import tingle from '../tingle'
import '../tingle.css'

export default class Payments extends Component {
    docs = new tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Закрыть",
    });

    componentWillUnmount() {
        this.docs.destroy()
    }

    componentDidMount() {

        this.docs.setContent(
            ` <div class="payments-documents">
                <h1>Образцы документов</h1>
                <ul>
                    <li>
                        <a href="http://zotov-test.ru/wp-content/uploads/2018/11/Перечень-документов-для-.doc">Перечень документов для подачи заявления</a>
                    </li>
                    <li>
                        <a href="http://zotov-test.ru/wp-content/uploads/2018/11/Анкета-физ.лицо.doc">Анкета</a>
                    </li>
                    <li><a href="http://zotov-test.ru/wp-content/uploads/2018/11/Квитанция-на-оплату.doc">Квитанция на оплату</a></li>
                    <li><a href="http://zotov-test.ru/wp-content/uploads/2018/11/Реквизиты-Опора-России.doc">Реквизиты Опоры</a></li>
                    <li><a href="http://zotov-test.ru/wp-content/uploads/2018/11/Согласие-на-обработку-персональных-данных.xls">Согласие на обработку данных</a></li>
                    <li><a href="http://zotov-test.ru/wp-content/uploads/2018/11/Учетная-карточка.doc">Учетная карточка</a></li>
                    <li><a href="http://zotov-test.ru/wp-content/uploads/2018/11/Заявление.doc">Заявление</a></li>
                </ul>
            </div>`
        )
    }

    render() {
        return (
            <section id="payments" className="section-acsent-light">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Пожертвования и членские взносы</h1>
                        <h2 className="section-description">Членские взносы</h2>
                    </div>
                    {/* <div className="row justify-content-center payments-wrapper">
                        <div className="payment-item">
                            <div className="payment-header">
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
                                <div style={{marginTop: '50px'}} className="payment-accept-button d-flex justify-content-center">
                                    <button className="button button-light">Вступить</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <p>
                        Для вступления в Свердловское отделение <b>«ОПОРЫ РОССИИ»</b> Вам необходимо направить заполненный пакет документов, Вашу фотографию и копию 2-ух страниц паспорта (пасп.данные, прописка) на электронный ящик <a href="mailto:opora-66@mail.ru">opora-66@mail.ru</a>.
                        <br /> А также необходимо внести вступительный взнос в размере <b>5000 рублей</b>.
                        <br />
                        <br />Совершить оплату вступительного взноса можно несколькими способами:
                        <br />1. по реквизитам (убедительная просьба в основании платежа указать: «вступительный взнос за ФИО ( полностью ),  без НДС .»);
                        <br />2.  по квитанции через банк;
                        <br />3.  в бухгалтерии Свердловского  отделения "ОПОРЫ РОССИИ" по адресу: г. Екатеринбург,  ул. Юмашева, 11
                    </p>
                    <button onClick={() => this.docs.open()} className="button button-light" >Образцы документов</button>
                </div>
            </section>
        )
    }
}
