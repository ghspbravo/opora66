import React, { Component } from 'react'

import tingle from '../tingle'
import '../tingle.css'

export default class Management extends Component {
    constructor(props) {
        super(props)
        let isMobile = window.innerWidth < 1200

        this.state = {
            isMobile: isMobile ? true : false,
            managementsLoading: true,
            managements: null,
            managementsError: null,
            managementsCount: null,
            presidentLoading: true,
            president: null,
            presidentError: null,
            presidentCategoryId: 13,
            currentCategory: 8,
            pagesCount: null,
            pageToLoad: 1,
            postsPerPage: isMobile ? 5 : 10,
        }
    }

    team = new tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
    });

    componentWillUnmount() {
        this.team.destroy()
    }

    loadCategory = (category) => {

        fetch(`${this.props.server}/categories/${category}`)
            .then(data => data.json())
            .then(data => this.setState({
                pagesCount: Math.ceil(data.count / this.state.postsPerPage),
                currentCategory: category,
                pageToLoad: 1,
            }))
            .then(this.loadPublications(category, 1))
    }

    loadPublications = (category = null, page = null) => {
        fetch(`${this.props.server}/posts?categories=${category ? category : this.state.currentCategory}&per_page=${this.state.postsPerPage}&page=${page ? page : this.state.pageToLoad}&_embed`)
            .then(data => data.json())
            .then(data => this.setState({
                managements: category ? data : [...this.state.managements, ...data],
                managementsLoading: false,
                pageToLoad: this.state.pageToLoad + 1,
            }))
    }

    componentDidMount() {
        this.loadCategory(this.state.currentCategory)

        fetch(`${this.props.server}/posts?categories=${this.state.presidentCategoryId}&_embed&order=asc`)
            .then(data => data.json())
            .then(data => this.setState({
                president: data,
                presidentLoading: false,
            }))

        this.team.setContent(
            `<div class="management-all-wrapper">
            <h1 class="management-all-title">
                Все члены организации
            </h1>
            <div class="management-section">
                <h2>Президент Опоры</h2>
                <ul>
                    <li>Калинин Александр Сергеевич</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Вице-председатели</h2>
                <ul>
                    <li>Аптер Григорий Борисович</li>
                    <li>Артюх Евгений Петрович</li>
                    <li>Климина Анастасия Васильевна</li>
                    <li>Ханин Дмитрий Николаевич</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Совет</h2>
                <ul>
                    <li>Аптер Григорий Борисович</li>
                    <li>Артюх Евгений Петрович</li>
                    <li>Бориско Илья Николаевич</li>
                    <li>Горбунов Алексей Вячеславович</li>
                    <li>Дубровина Анна Николаевна</li>
                    <li>Жукова Нина Сергеевна</li>
                    <li>Ивачев Захар Петрович</li>
                    <li>Колосов Андрей Владиславович</li>
                    <li>Комар Анатолий Васильевич</li>
                    <li>Климина Анастасия Васильевна</li>
                    <li>Крокос Тарас Михайлович</li>
                    <li>Лазарева Инна Павловна</li>
                    <li>Окуньков Владимир Викторович</li>
                    <li>Процык Богдан Иванович</li>
                    <li>Савин Николай Григорьевич</li>
                    <li>Сидоров Алексей Филиппович</li>
                    <li>Старченко Олег Эдуардович</li>
                    <li>Фатеев Олег Николаевич</li>
                    <li>Хабаров Михаил Юрьевич</li>
                    <li>Ханин Дмитрий Николаевич</li>
                    <li>Щелоков Алексей Николаевич</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Профильные комитеты и комиссии</h2>
                <ul>
                    <li>Комитет по строительству – Савин Николай Григорьевич, <a href="mailto:nsavin72@mail.ru">nsavin72@mail.ru</a></li>
                    <li>Комитет по туризму - Окуньков Владимир Викторович, <a href="mailto:vlavio66@gmail.com">vlavio66@gmail.com</a></li>
                    <li>Комитет по защите прав в сфере закупок - Киреев Александр Сергеевич, <a href="mailto:kireev-zakonnik@mail.ru">kireev-zakonnik@mail.ru</a></li>
                    <li>Комитет по оценке регулирующего воздействия – Ханин Дмитрий Николаевич, <a href="mailto:66psp@mail.ru">66psp@mail.ru</a></li>
                    <li>Комитет по развитию женского предпринимательства – Климина Анастасия Васильевна, <a href="mailto:kliminamarketing@mail.ru">kliminamarketing@mail.ru</a></li>
                    <li>Комитет по средствам технической безопасности  – Леталов Петр Федорович, <a href="mailto:vpohors@bk.ru">vpohors@bk.ru</a></li>
                    <li>Комитет по природопользованию и экологии  – Стародубцев Василий Николаевич, <a href="mailto:lidersvn@mail.ru">lidersvn@mail.ru</a></li>
                    <li>Комитет по международным связям – Чудинов Алексей Михайлович, <a href="mailto:a.m.chudinov@urfu.ru">a.m.chudinov@urfu.ru</a> </li>
                    <li>Комитет по молодежному предпринимательству – Войтенко Мария Алексеевна, <a href="mailto:voitenko.sb@gmail.com">voitenko.sb@gmail.com</a> </li>
                    <li>Комитет по энергетике – Имамов Владимир Тагирович, <a href="mailto:imamov_v@rambler.ru">imamov_v@rambler.ru</a> </li>
                    <li>Комиссия по art, медиа и киноиндустрии – Терентьев Артем Валерьевич, <a href="mailto:artt82@yandex.ru">artt82@yandex.ru</a> </li>
                    <li>Комитет по инвестициям - Васильева Юлия Сергеевна, <a href="mailto:parvo.miks@yandex.ru">parvo.miks@yandex.ru</a></li>
                    <li>Комитет по транспорту – Вотинцев Сергей Васильевич <a href="mailto:asma-votinceva@yandex.ru">asma-votinceva@yandex.ru</a></li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Местные отделения</h2>
                <ul>
                    <li>Алапаевск -  Никонов Андрей Семенович, <a href="mailto:nikonoff.as@gmail.com">nikonoff.as@gmail.com</a></li>
                    <li>Артемовск-  Фатеев Олег Николаевич, <a href="mailto:oleg.fateev@inbox.ru">oleg.fateev@inbox.ru</a></li>
                    <li>Богданович - Ровный Сергей Николаевич, <a href="mailto:bill777@ya.ru">bill777@ya.ru</a></li>
                    <li>Екатеринбург -  Аптер Григорий Борисович, <a href="mailto:apter@promaudit.com">apter@promaudit.com</a> </li>
                    <li>Каменск-Уральский -  Горбунов Алексей Вячеславович, <a href="mailto:grender@yandex.ru">grender@yandex.ru</a></li>
                    <li>Красноуральск -  Комар Анатолий Васильевич, <a href="mailto:Anatoly.comar@yandex.ru">Anatoly.comar@yandex.ru</a></li>
                    <li>Красноуфимск – Мелешкина Ольга Николаевна, <a href="mailto:meleshkina.777@mail.ru">meleshkina.777@mail.ru</a> </li>
                    <li>Кушва -  Блинов Михаил Густавович, <a href="mailto:blinov-mg@yandex.ru">blinov-mg@yandex.ru</a> <a href="mailto:blinov-mg@mail.ru">blinov-mg@mail.ru</a></li>
                    <li>Нижний Тагил - Лазарева Инна Павловна, <a href="mailto:Lazareva-ip@mail.ru">Lazareva-ip@mail.ru</a></li>
                    <li>Полевской - Бориско Илья Николаевич, <a href="mailto:boriskoilya@mail.ru">boriskoilya@mail.ru</a></li>
                    <li>Сысерть - Климина Анастасия Васильевна , <a href="mailto:kliminamarketing@mail.ru">kliminamarketing@mail.ru</a></li>
                    <li>Тавда - Новоселов Александр Александрович, <a href="mailto:Opora-tavda@yandex.ru">Opora-tavda@yandex.ru</a> <a href="mailto:ooomaiv@yandex.ru">ooomaiv@yandex.ru</a></li>
                    <li>Туринск -  Бусыгин Александр Анатольевич, <a href="mailto:Bus_1962@mail.ru">Bus_1962@mail.ru</a></li>
                    <li>Горноуральский городской округ – Васильева Юлия Сергеевна, <a href="mailto:parvo.miks@yandex.ru">parvo.miks@yandex.ru</a> </li>
                </ul>
            </div>
        </div>`
        )
    }
    render() {
        return (
            <section id="management">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Мы лучшая команда</h1>
                        <h2 className="section-description">Члены организации</h2>
                    </div>
                    <div style={{ marginTop: '50px' }} className="managements-wrapper">
                        {this.state.president
                            ? this.state.president.map((leader, index) => <div key={index} className="row no-gutters management-leader">
                                <div style={{ marginBottom: '50px' }} className="d-none d-md-block management-leader-photo management-card">
                                    <img src={leader._embedded['wp:featuredmedia'][0].source_url} alt="person" />
                                </div>
                                <div className="col-12 d-md-none d-flex justify-content-center">
                                    <img src={leader._embedded['wp:featuredmedia'][0].source_url} alt="person" className="management-card" />
                                </div>
                                <div className="col col-lg-8 management-leader-info">
                                    <h3 className="management-leader-name">{leader.title.rendered}</h3>
                                    <p className="management-leader-description">{leader.content.rendered.replace(/<p>/, '').replace(/<\/p>/, '')}
                                    </p>
                                </div>
                            </div>)
                            : <p>Загрузка...</p>}
                        <div className="row no-gutters justify-content-center managements">
                            {this.state.managements
                                ? this.state.managements.map((management, index) => <div key={index} style={{ backgroundImage: `url(${management._embedded['wp:featuredmedia'][0].source_url})` }} className="management-card">
                                    <div className="management-info">
                                        <h3 className="management-name">{management.title.rendered}</h3>
                                        <p className="management-post">{management.content.rendered.replace(/<p>/, '').replace(/<\/p>/, '')}</p>
                                    </div>
                                </div>)
                                : <div style={{ backgroundColor: 'lightgray' }} className="management-card">
                                    <div className="management-info"></div>
                                    <div className="management-info"></div>
                                    <div className="management-info"></div>
                                    <div className="management-info"></div>
                                    <div className="management-info"></div>
                                </div>
                            }
                        </div>
                        <div className="row justify-content-center">
                            {this.state.pageToLoad > this.state.pagesCount
                                ? null
                                : <button onClick={() => this.loadPublications()} style={{ marginTop: '40px' }} className="button button-light" disabled={this.state.publicationsLoading}>{this.state.publicationsLoading ? 'Загрузка' : 'Больше'}</button>}
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ marginTop: '30px' }}>
                        <button onClick={() => this.team.open()} className="button button-light">Полный список членов организации</button>
                    </div>
                </div>
            </section>
        )
    }
}
