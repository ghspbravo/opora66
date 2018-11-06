import React, { Component } from 'react'

export default class Management extends Component {
    constructor(props) {
        super(props)
        let isMobile = window.innerWidth < 1200

        this.state = {
            isMobile: isMobile ? true : false,
            managementsLoading: true,
            managements: null,
            managementsError: null,
            managementsCategoriesId: [
                8, 9, 10, 11, 12
            ],
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

        fetch(`${this.props.server}/posts?categories=${this.state.presidentCategoryId}&_embed`)
            .then(data => data.json())
            .then(data => this.setState({
                president: data[0],
                presidentLoading: false,
            }))
    }
    render() {
        return (
            <section id="management">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Мы лучшая команда</h1>
                        <h2 className="section-description">Члены правления</h2>
                    </div>
                    <div className="row filters justify-content-center">
                        <button onClick={() => this.loadCategory(this.state.managementsCategoriesId[0])} className="filter-item active">Все</button>
                        <button onClick={() => this.loadCategory(this.state.managementsCategoriesId[1])} className="filter-item">Председатели</button>
                        <button onClick={() => this.loadCategory(this.state.managementsCategoriesId[2])} className="filter-item">Руководители</button>
                        <button onClick={() => this.loadCategory(this.state.managementsCategoriesId[3])} className="filter-item">Члены совета</button>
                        <button onClick={() => this.loadCategory(this.state.managementsCategoriesId[4])} className="filter-item">Остальные</button>
                    </div>
                    <div style={{ marginTop: '50px' }} className="managements-wrapper">
                        {this.state.president
                            ? <div className="row no-gutters management-leader">
                                <div style={{ marginBottom: '50px' }} className="d-none d-md-block management-leader-photo management-card">
                                    <img src={this.state.president._embedded['wp:featuredmedia'][0].source_url} alt="person" />
                                </div>
                                <div className="col-12 d-md-none d-flex justify-content-center">
                                    <img src={this.state.president._embedded['wp:featuredmedia'][0].source_url} alt="person" className="management-card" />
                                </div>
                                <div className="col col-lg-8 management-leader-info">
                                    <h3 className="management-leader-name">{this.state.president.title.rendered}</h3>
                                    <p className="management-leader-description">{this.state.president.content.rendered.replace(/<p>/, '').replace(/<\/p>/, '')}
                                    </p>
                                </div>
                            </div>
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
                    </div>
                    <div className="row justify-content-center">
                        {this.state.pageToLoad > this.state.pagesCount
                            ? null
                            : <button onClick={() => this.loadPublications()} style={{ marginTop: '40px' }} className="button button-light" disabled={this.state.publicationsLoading}>{this.state.publicationsLoading ? 'Загрузка' : 'Больше'}</button>}
                    </div>
                </div>
            </section>
        )
    }
}
