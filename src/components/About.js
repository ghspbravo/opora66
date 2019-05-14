import React, { Component } from 'react'

import about from '../res/aboutPic.jpg'
import tingle from '../tingle'

export default class About extends Component {


    docs = new tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Закрыть",
    });

    componentDidMount() {
        this.docs.setContent(
            `<div class="management-all-wrapper">
            <h1 class="management-all-title">Уставные документы</h1>
            <div class="documents-popup-item">
                <a class="documents-popup-item-link" href="http://opora66.ru/wp-content/uploads/2018/11/Устав-ОПОРЫ-РОССИИ-2017.pdf" target='blank'>Устав Опоры России</a>
            </div>
            <div class="documents-popup-item">
                <a class="documents-popup-item-link" href="http://opora66.ru/wp-content/uploads/2018/11/Положение-о-комитетах-и-.pdf" target='blank'>Положение о комитетах и комиссиях</a>
            </div>
            <div class="documents-popup-item">
                <a class="documents-popup-item-link" href="http://opora66.ru/wp-content/uploads/2018/11/ПОЛОЖЕНИЕ-о-региональном-и-местном-отделении.pdf" target='blank'>Положение о региональном и местном отделении</a>
            </div>
        </div>`
        )
    }

    componentWillUnmount() {
        this.docs.destroy()
    }
    render() {
        return (
            <section id="about" className="section-side-left section-dark">
                <div className="container-fluid section-content">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-12 image-bordered about-image">
                            <img src={about} alt="about preview" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="section-title title-left">
                                <h1 className="section-name">О нас</h1>
                                <h2 className="section-description">Наша деятельность</h2>
                            </div>
                            <p>
                                «ОПОРА РОССИИ» является площадкой для эффективного профессионального диалога владельцев и руководителей предприятий малого и среднего бизнеса и представителей федеральных органов исполнительной власти, региональной власти и муниципалитетов, контролирующих органов, инфраструктуры поддержки малого и среднего предпринимательства, а также представителей экспертного сообщества.
                            </p>
                            <div className="row no-gutters" style={{ marginTop: '40px' }}>
                                <a href='http://opora.ru/' rel="noopener noreferrer" target="_blank" className="button button-light">Узнать больше</a>
                                <button
                                    onClick={() => this.docs.open()}
                                    style={{ marginLeft: 'auto' }}
                                    className="button button-light">Документы</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
