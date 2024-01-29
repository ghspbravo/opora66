import React, { Component } from 'react';
import 'normalize.css'
import '../node_modules/swiper/swiper.min.css';
import './App.css';


import { HashRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Post from './components/Post';
import Bureau from './components/Bureau';
import Video from './pages/video';
import Projects from './pages/projects';

class App extends Component {

  SERVER = 'https://opora66.ru/wp-json/wp/v2'

  componentDidMount() {

    let filters = document.querySelectorAll('.filters')
    filters.forEach(filter => filter.querySelectorAll('.filter-item').forEach(item => {
      item.onmouseover = (e) => e.target.classList.add('hover')
      item.onmouseleave = (e) => e.target && e.target.classList ? e.target.classList.remove('hover') : null
      item.addEventListener('click', e => {
        filter.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
      })
    }))
  }

  handleMobileNavClose = (e) => {
    let wrapper = document.querySelector('.nav-mobile-wrapper')
    let menu = document.querySelector('.nav-mobile')

    if (e.target !== wrapper && !e.target.classList.contains('header-nav-mobile-item')) return

    wrapper.style.opacity = 0;
    menu.style.left = '-30vw';
    setTimeout(() => wrapper.style.display = 'none', 300)
  }

  render() {
    return (
      <Router>
        <main>
          <nav className="d-lg-none nav-mobile-wrapper" onClick={this.handleMobileNavClose}>
            <div className="nav-mobile">
              <HashLink className="header-nav-mobile-item" to="/#about">О нас</HashLink>
              <HashLink className="header-nav-mobile-item" to="/#publications">Новости</HashLink>
              <Link className="header-nav-mobile-item" to="/bureau">Бюро</Link>
              <Link className="header-nav-mobile-item" to="/video">Видео</Link>
              <Link className="header-nav-mobile-item" to="/projects">Проекты</Link>
              <HashLink className="header-nav-mobile-item" to="/#contacts">Контакты</HashLink>
              <HashLink className="header-nav-mobile-item" to="/#management">Члены Организации</HashLink>
            </div>
          </nav>
          <Header />
          <Route path="/" exact render={() =>
            <Main server={this.SERVER} />} />
          <Route path="/p=:id" render={({ history, match }) =>
            <Post server={this.SERVER} id={match.params.id} goBack={history.goBack} />} />
          <Route exact path="/bureau" component={Bureau} />
          <Route exact path="/video" render={({ history }) =>
            <Video server={this.SERVER} goBack={history.goBack} />} />
          <Route exact path="/projects" render={({ history }) =>
            <Projects server={this.SERVER} goBack={history.goBack} />} />
          <Route path="/projects/p=:id" render={({ history, match }) =>
            <Post server={this.SERVER} id={match.params.id} goBack={history.goBack} />} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
