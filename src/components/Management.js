import React, { Component } from 'react'

import tingle from '../tingle'
import '../tingle.css'

import Parser from 'html-react-parser';

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
            presidentCategoryId: 12,
            currentCategory: 13,
            pagesCount: null,
            pageToLoad: 1,
            postsPerPage: isMobile ? 5 : 10,
        }
    }

    team = new tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Закрыть",
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
        fetch(`${this.props.server}/posts?categories=${category ? category : this.state.currentCategory}&per_page=${this.state.postsPerPage}&page=${page ? page : this.state.pageToLoad}&orderby=title&order=asc&_embed`)
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
                <h2>Председатель Опоры</h2>
                <ul>
                    <li>Тыщенко Илья Владимирович</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Вице-председатели</h2>
                <ul>
                    <li>Аптер Григорий Борисович</li>
                    <li>Войтенко Мария Алексеевна</li>
                    <li>Климина Анастасия Васильевна</li>
                    <li>Ханин Дмитрий Николаевич</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Совет</h2>
                <ul>
                  <li>Аптер Григорий Борисович</li>
                  <li>Войтенко Мария Алексеевна </li>
                  <li>Имамов Владимир Тагирович </li>
                  <li>Климина Анастасия Васильевна</li>
                  <li>Колосов Андрей Владиславович</li>
                  <li>Кузовков Василий Дмитриевич  </li>
                  <li>Литвиненко Сергей Александрович  </li>
                  <li>Малышев Егор Александрович</li>
                  <li>Рыцева Юлия Валерьевна </li>
                  <li>Ханин Дмитрий Николаевич</li>
                  <li>Щелоков Алексей Николаевич</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Профильные комитеты и комиссии</h2>
                <ul>
                  <li>Комитет по молодежному предпринимательству – Войтенко Мария Алексеевна</li>
                  <li>Комитет по оценке регулирующего воздействия – Ханин Дмитрий Николаевич</li>
                  <li>Комитет по развитию женского предпринимательства – Климина Анастасия Васильевна</li>
                  <li>Комитет по модернизации инфраструктуры ЖКХ – Рыцева Юлия Валерьевна</li>
                  <li>Комитет по энергетике – Имамов Владимир Тагирович</li>
                  <li>Комитет по средствам технической и пожарной безопасности – Пинчугов Максим Викторович</li>
                  <li>Комитет по строительству – Костин Олег Владимирович</li>
                  <li>Комитет по международным связям – Чудинов Алексей Михайлович</li>
                  <li>Комитет по транспорту – Вотинцев Сергей Васильевич</li>
                  <li>Комитет по инвестициям – Васильева Юлия Сергеевна</li>
                  <li>Комитет по туризму – Окуньков Владимир Викторович</li>
                  <li>Комитет по защите прав в сфере закупок – Киреев Александр Сергеевич</li>
                  <li>Комитет по природопользованию и экологии – Стародубцев Василий Николаевич</li>
                  <li>Комитет по социальному предпринимательству – Корякова Людмила Николаевна</li>
                  <li>Комитет по сельскому хозяйству – Черемисин Степан Николаевич</li>
                  <li>Комитет по взаимодействию с силовыми структурами – Гаглоев Андрей Заурович</li>
                  <li>Комитет по реформированию отрасли обращения с отходами – Литвиненко Сергей Александрович</li>
                  <li>Комиссия по клининговой деятельности и обращению с отходами – Локшина Алиса Борисовна</li>
                  <li>Комиссия по Арт, медиа и киноиндустрии – Терентьев Артем Валерьевич</li>
                  <li>Комитета по повышению прозрачности российского рынка и поддержке добросовестной конкуренции – Зоина Вера Юрьевна</li>
                  <li>Комитет по предпринимательскому образованию	"Иванова Татьяна Игоревна </li>
                  <li>Комитет по бюджету и налогам – Малышев Егор Александрович</li>
                  <li>Комиссия по Веллнес-индустрии – Яковлева Светлана Анатольевна </li>
                  <li>Комитет по поддержке и развитию креативной индустрии – Шереметьева Александра Владимировна </li>
                  <li>Комитет по развитию предпринимательства в муниципальных образованиях – Евланов Андрей Владимирович</li>
                  <li>Комитет индустрии красоты – Волчкова Алла Михайловна </li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Местные отделения</h2>
                <ul>
                    <li>Артемовск - Фатеев Олег Николаевич</li>
                    <li>Екатеринбург - Аптер Григорий Борисович</li>
                    <li>Каменск-Уральский - Горбунов Алексей Вячеславович</li>
                    <li>Красноуральск - Комар Анатолий Васильевич</li>
                    <li>Кушва - Блинов Михаил Густавович</li>
                    <li>Нижний Тагил - Лазарева Инна Павловна</li>
                    <li>Полевской - Бориско Илья Николаевич</li>
                    <li>Арамиль - Климина Анастасия Васильевна </li>
                    <li>Горноуральский городской округ – Васильева Юлия Сергеевна</li>
                </ul>
            </div>
            <div class="management-section">
                <h2>Общественные (Координационные) советы, комитеты, комиссии в состав которых включены члены Свердловского отделения «ОПОРЫ РОССИИ»</h2>
                <ul>
                  <li>Совет по содействию развитию малого и среднего предпринимательства при Полномочном представителе Президента РФ в УрФО - Тыщенко И.В.</li>
                  <li>Совет по развитию малого и среднего предпринимательства в Свердловской области при Правительстве СО - Тыщенко И.В.</li>
                  <li>Общественный Совет по защите малого и среднего бизнеса при Прокуратуре Свердловской области - Тыщенко И.В., Дубровина А.Н.</li>
                  <li>Инвестиционный Совет при Губернаторе СО - Тыщенко И.В.</li>
                  <li>Общественный совет при Управлении делами Губернатора Свердловской области и Правительства СО - Тыщенко И.В.</li>
                  <li>Общественный совет при ГУ МЧС России по СО -  Леталов П.Ф., Чуприян А.В.</li>
                  <li>Общественный экспертный совет при Уполномоченном по защите прав предпринимателей в СО - Дубровина А.Н., Горбунов А.В., Тыщенко И.В., Ханин Д.Н.</li>
                  <li>Общественный совет при Министерстве социальной политики СО – Золотова В.В.</li>
                  <li>Координационный Совет при ГУ МВД РФ по Свердловской области по взаимодействию с объединениями предпринимателей - Тыщенко И.В., Щёлоков А.Н.</li>
                  <li>Общественно-консультативный совет при Управлении Федеральной антимонопольной службы по Свердловской области - Киреев А.С., Ханин Д.Н.</li>
                  <li>Уральское межрегиональное территориальное управление Федерального агентства по техническому регулированию и метрологии (Ростехнадзор) - Аптер Г.Б.</li>
                  <li>Координационный совет по вопросам взаимодействия с представителями малого и среднего предпринимательства при Общественной приемной Управления Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Свердловской области (Роспотребнадзор) - Дубровина А.Н.</li>
                  <li>Общественный совет при Министерстве инвестиций и развития СО - Фатеев О.Н.</li>
                  <li>Общественный совет при Управлении государственной охраны объектов культурного наследия Свердловской области - Хабаров М.Ю.</li>
                  <li>Общественный совет при Министерстве международных и внешнеэкономических связей Свердловской области - Чудинов А.М.</li>
                  <li>Общественный совет при Министерстве экономики и территориального развития СО - Ханин Д.Н., Галимзянов Ф.Р.</li>
                  <li>Общественный совет при Департаменте по обеспечению деятельности мировых судей СО - Щелоков А.Н.</li>
                  <li>Общественный совет при Министерстве строительства и развития инфраструктуры СО - Савин Н.Г., Золотов Е.М.</li>
                  <li>Общественный совет Управления ЗАГС по СО - Золотова В.В., Бардашкина Е.В.</li>
                  <li>Рабочая группа по координации реформы контрольной и надзорной деятельности в Свердловской области. - Ханин Д.Н.</li>
                  <li>Общественный совет при УФНС России – Тыщенко И.В., Щелоков А.М</li>
                </ul>
            </div>
            <div style="margin-top: 35px" class="row justify-content-center">
                <a class="management-file-link" href="http://opora66.ru/wp-content/uploads/2021/01/Члены-Свердловского-отделения-ОПОРА-РОССИИ.docx">Скачать полный список членов организации</a>
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
                        <h2 className="section-description">Члены Организации</h2>
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
                                    <div className="management-leader-description">{Parser(leader.content.rendered)}
                                    </div>
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
                        {/* <div className="row justify-content-center">
                            {this.state.pageToLoad > this.state.pagesCount
                                ? null
                                : <button onClick={() => this.loadPublications()} style={{ marginTop: '40px' }} className="button button-light" disabled={this.state.publicationsLoading}>{this.state.publicationsLoading ? 'Загрузка' : 'Больше'}</button>}
                        </div> */}
                    </div>
                    <div className="row justify-content-center" style={{ marginTop: '30px' }}>
                        <button onClick={() => this.team.open()} className="button button-light">Полный список членов организации</button>
                    </div>
                </div>
            </section>
        )
    }
}
