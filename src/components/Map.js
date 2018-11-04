import React, { Component } from 'react'

import map from '../res/map.png'
import map_icon_1 from '../res/map-icon-1.svg'
import map_icon_2 from '../res/map-icon-2.svg'
import map_icon_3 from '../res/map-icon-3.svg'
import map_icon_4 from '../res/map-icon-4.svg'
import map_icon_5 from '../res/map-icon-5.svg'

export default class Map extends Component {
    render() {
        return (
            <section id="map" className="section-acsent-light">
                <div className="container" style={{ marginRight: '' }}>
                    <div className="row">
                        <div className="col-lg-6 section-content">
                            <div className="section-title title-left">
                                <h1 className="section-name">Особенности</h1>
                                <h2 className="section-description">Карта предпринимателя</h2>
                            </div>
                            <p>
                                Карта предпринимателя - членский билет, который позволяет члену "ОПОРЫ РОССИИ" участвовать в законотворческом процессе, быть в сообществе активных и амбициозных предпринимателей, принимать участие в деловых и обучающих мероприятия организации и пользоваться пакетом с эксклюзивными скидками и предложениями от партнеров "ОПОРЫ РОССИИ"
                            </p>
                            <div className="row align-items-start map-privileges-wrapper">
                                <div style={{width: '68px'}} className="map-privilege">
                                    <div className="privilege-icon">
                                        <img src={map_icon_1} alt="" />
                                    </div>
                                    <p className="privilege-description">
                                        Получение Карточки АРЕС
                                    </p>
                                </div>
                                <div style={{width: '97px'}} className="map-privilege">
                                    <div className="privilege-icon">
                                        <img src={map_icon_2} alt="" />
                                    </div>
                                    <p className="privilege-description">
                                        Участие В Вебинарах И Деловых Мероприятиях
                                    </p>
                                </div>
                                <div style={{width: '97px'}} className="map-privilege">
                                    <div className="privilege-icon">
                                        <img src={map_icon_3} alt="" />
                                    </div>
                                    <p className="privilege-description">
                                        Уставные Права Члена Опоры России
                                    </p>
                                </div>
                                <div style={{width: '74px'}} className="map-privilege">
                                    <div className="privilege-icon">
                                        <img src={map_icon_4} alt="" />
                                    </div>
                                    <p className="privilege-description">
                                        20% На Услугу “Быстрая Проверка Контрагентов”
                                    </p>
                                </div>
                                <div style={{width: '104px'}} className="map-privilege">
                                    <div className="privilege-icon">
                                        <img src={map_icon_5} alt="" />
                                    </div>
                                    <p className="privilege-description">
                                        50% На Ведение Интернет-бухгалтерии
                                    </p>
                                </div>
                            </div>
                            <button style={{marginTop: '40px'}} className="button button-light d-lg-block d-none">Приобрести</button>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center" style={{marginTop: '20px'}}>
                            <img className="map-image" src={map} alt="employerMap" />
                            <button style={{marginTop: '40px'}} className="button button-light d-lg-none">Приобрести</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
