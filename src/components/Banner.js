import React, { Component } from 'react'

import logo from '../res/brand.png'
import bg from '../res/banner-background.jpg'

export default class Banner extends Component {
    render() {
        return (
            <section id="banner" className="section-dark section-full" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <div className="d-flex align-items-center justify-content-center" style={{height: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.33)',}}>
                    <div className="section-content d-flex flex-column align-items-center">
                        <img className="banner-logo" src={logo} alt="logo"/>
                        <h1 style={{marginTop: '20px'}} className="banner-title">Общероссийская общественная организация малого и среднего предпринимательства</h1>
                        <div className="row justify-content-center banner-controls">
                            <button className="button button-ghost">Подробнее</button>
                            <button className="button button-acsent">Вступить</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
