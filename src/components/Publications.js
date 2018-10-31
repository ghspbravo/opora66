import React, { Component } from 'react'

export default class Publications extends Component {
    render() {
        return (
            <section id="publications">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Узнайте о нас больше</h1>
                        <h2 className="section-description">Новости и публикации</h2>
                    </div>
                    <div className="row filter-wrapper">
                        <button className="filter-item">Все</button>
                        <button className="filter-item">Новости</button>
                        <button className="filter-item">Анонсы</button>
                        <button className="filter-item">Регионы</button>
                        <button className="filter-item">Фото и видео</button>
                        <button className="filter-item">Особое мнение</button>
                    </div>
                </div>
            </section>
        )
    }
}
