import React, { Component } from 'react'

import about from '../res/about.jpg'

export default class About extends Component {
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
                            <button onClick={() => document.querySelector('#publications').scrollIntoView({
                                behavior: 'smooth'
                            })} style={{marginTop: '40px'}} className="button button-light">Узнать больше</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
