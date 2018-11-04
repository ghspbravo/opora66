import React, { Component } from 'react'

import management_leader from '../res/management_leader.png'
import management_person from '../res/management_person.png'

export default class Management extends Component {
    render() {
        return (
            <section id="management">
                <div class="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Мы лучшая команда</h1>
                        <h2 className="section-description">Члены правления</h2>
                    </div>
                    <div className="row filters justify-content-center">
                        <button className="filter-item active">Все</button>
                        <button className="filter-item">Председатели</button>
                        <button className="filter-item">Руководители</button>
                        <button className="filter-item">Члены совета</button>
                        <button className="filter-item">Остальные</button>
                    </div>
                    <div style={{ marginTop: '50px' }} className="managements-wrapper">
                        <div className="row no-gutters management-leader">
                            <div style={{ marginBottom: '50px'}} className="d-none d-md-block management-leader-photo management-card">
                                <img src={management_leader} alt="photo" />
                            </div>
                            <div className="col-12 d-md-none d-flex justify-content-center">
                                <img src={management_leader} alt="photo" className="management-card" />
                            </div>
                            <div className="col col-lg-8 management-leader-info">
                                <h3 className="management-leader-name">Калинин Александр Сергеевич</h3>
                                <p className="management-leader-description">
                                    Президент Общероссийской общественной организации малого и среднего предпринимательства «ОПОРА РОССИИ». Президент Ассоциации "Некоммерческое партнерство Объединение предпринимательских организаций «ОПОРА»
                                </p>
                            </div>
                        </div>
                        <div className="row no-gutters justify-content-center managements">
                            <div style={{ backgroundImage: `url(${management_person})` }} className="management-card">
                                <div className="management-info">
                                    <h3 className="management-name">Аптер Григорий Борисович</h3>
                                    <p className="management-post">Председатель</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${management_person})` }} className="management-card">
                                <div className="management-info">
                                    <h3 className="management-name">Аптер Григорий Борисович</h3>
                                    <p className="management-post">Председатель</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${management_person})` }} className="management-card">
                                <div className="management-info">
                                    <h3 className="management-name">Аптер Григорий Борисович</h3>
                                    <p className="management-post">Председатель</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${management_person})` }} className="management-card">
                                <div className="management-info">
                                    <h3 className="management-name">Аптер Григорий Борисович</h3>
                                    <p className="management-post">Председатель</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${management_person})` }} className="management-card">
                                <div className="management-info">
                                    <h3 className="management-name">Аптер Григорий Борисович</h3>
                                    <p className="management-post">Председатель</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
