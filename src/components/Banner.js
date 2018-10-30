import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <section id="banner" className="section-dark section-full">
                <div className="row align-items-center justify-content-center" style={{height: 'inherit'}}>
                    <div className="section-content">
                        <p className="banner-slogan">Тект опора россии</p>
                        <h1 className="banner-title">Опора России</h1>
                        <h2 className="banner-subtitle">Общероссийская общественная организация малого и среднего предпринимательства</h2>
                        <div className="row justify-content-center banner-controls">
                            <button className="button-ghost">Подробнее</button>
                            <button className="button-acsent">Вступить</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
