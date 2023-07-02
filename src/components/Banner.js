import React, { Component } from 'react'

import oporaBrand from '../res/OporaBrandWhite2.png'
import bg from '../res/banner-background.jpg'

export default class Banner extends Component {
    render() {
        return (
            <section id="banner" className="section-dark section-full" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.44)', }}>
                    <div className="section-content d-flex flex-column align-items-center">
                        <img className="banner-logo col-12" src={oporaBrand} alt="logo" />
                        <div className="row justify-content-center banner-controls">
                            <button onClick={() => document.querySelector('#about').scrollIntoView({
                                behavior: 'smooth'
                            })} className="button button-ghost">Подробнее</button>
                            <button onClick={() => document.querySelector('#payments').scrollIntoView({
                                behavior: 'smooth'
                            })} className="button button-acsent">Вступить</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
