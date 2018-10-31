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
                    <div className="row filters justify-content-center">
                        <button className="filter-item active">Все</button>
                        <button className="filter-item">Новости</button>
                        <button className="filter-item">Анонсы</button>
                        <button className="filter-item">Регионы</button>
                        <button className="filter-item">Фото и видео</button>
                        <button className="filter-item">Особое мнение</button>
                    </div>
                    <div className="publications-container" style={{ marginTop: '60px' }}>
                        <div class="publication-item-1">
                            <div className="publication-item publication-compact" style={{ backgroundImage: 'url(https://via.placeholder.com/370x320)' }}>
                                <div className="publication-content">
                                    <p className="publication-excerpt">1Александр Калинин: Дальний Восток должен стать регионом - центром притяжения граждан и малого бизнеса</p>
                                    <a className="publication-link" href="">Читать</a>
                                </div>
                            </div>
                            <div className="publication-item publication-compact" style={{ backgroundImage: 'url(https://via.placeholder.com/370x320)' }}>
                                <div className="publication-content">
                                    <p className="publication-excerpt">2Александр Калинин: Дальний Восток должен стать регионом - центром притяжения граждан и малого бизнеса</p>
                                    <a className="publication-link" href="">Читать</a>
                                </div>
                            </div>
                        </div>
                        <div class="publication-item-3">
                            <div className="publication-item publication-large" style={{ backgroundImage: 'url(https://via.placeholder.com/370x670)' }}>
                                <div className="publication-content">
                                    <p className="publication-excerpt">3Александр Калинин: Дальний Восток должен стать регионом - центром притяжения граждан и малого бизнеса</p>
                                    <a className="publication-link" href="">Читать</a>
                                </div>
                            </div>
                        </div>
                        <div class="publication-item-2">
                            <div className="publication-item publication-compact" style={{ backgroundImage: 'url(https://via.placeholder.com/370x320)' }}>
                                <div className="publication-content">
                                    <p className="publication-excerpt">4Александр Калинин: Дальний Восток должен стать регионом - центром притяжения граждан и малого бизнеса</p>
                                    <a className="publication-link" href="">Читать</a>
                                </div>
                            </div>
                            <div className="publication-item publication-compact" style={{ backgroundImage: 'url(https://via.placeholder.com/370x320)' }}>
                                <div className="publication-content">
                                    <p className="publication-excerpt">5Александр Калинин: Дальний Восток должен стать регионом - центром притяжения граждан и малого бизнеса</p>
                                    <a className="publication-link" href="">Читать</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
