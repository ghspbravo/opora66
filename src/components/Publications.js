import React, { Component } from 'react'
import publicationsDesktopGrid from './elements/publicationsDesktopGrid';
import publicationsMobileGrid from './elements/publicationsMobileGrid';

export default class Publications extends Component {
    constructor(props) {
        super(props)

        let isMobile = window.innerWidth < 1200

        this.state = {
            isMobile: isMobile ? true : false,
            publicationsLoading: true,
            publications: null,
            publicationsCategoriesId: [
                2, 3, 4, 5, 6, 7
            ],
            currentCategory: 2,
            pagesCount: null,
            pageToLoad: 1,
            postsPerPage: isMobile ? 5 : 10,
            gridsCount: [],
        }
    }

    componentDidMount() {
        this.loadCategory(this.state.currentCategory)
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
                publications: category ? data : [...this.state.publications, ...data],
                publicationsLoading: false,
                pageToLoad: this.state.pageToLoad + 1,
                gridsCount: [...this.state.gridsCount, true]
            }))
    }

    render() {
        return (
            <section id="publications">
                <div className="container section-content">
                    <div className="section-title title-center">
                        <h1 className="section-name">Узнайте о нас больше</h1>
                        <h2 className="section-description">Новости и публикации</h2>
                    </div>
                    <div className="row filters justify-content-center">
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[0])} className="filter-item active">Все</button>
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[1])} className="filter-item">Новости</button>
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[2])} className="filter-item">Анонсы</button>
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[3])} className="filter-item">Регионы</button>
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[4])} className="filter-item">Фото и видео</button>
                        <button disabled={this.state.publicationsLoading} onClick={() => this.loadCategory(this.state.publicationsCategoriesId[5])} className="filter-item">Особое мнение</button>
                    </div>
                    <div id='grid' className="row justify-content-center">
                        {publicationsDesktopGrid(this.state.publications, this.state.gridsCount)}
                        {publicationsMobileGrid(this.state.publications)}
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
