import React, { Component } from 'react';
import 'normalize.css'
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Post from './components/Post';
import Bureau from './components/Bureau';

class App extends Component {

	SERVER = 'http://opora66.ru/wp-json/wp/v2'

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
							<a className="header-nav-mobile-item" href="#about">О нас</a>
							<a className="header-nav-mobile-item" href="#publications">Новости</a>
							<Link className="header-nav-mobile-item" to="/bureau">Бюро</Link>
							<a className="header-nav-mobile-item" href="#contacts">Контакты</a>
							<a className="header-nav-mobile-item" href="#management">Члены Организации</a>
						</div>
					</nav>
					<Header />
					<Route path="/" exact render={() =>
						<Main server={this.SERVER} />} />
					<Route path="/p=:id" render={({ history, match }) =>
						<Post server={this.SERVER} id={match.params.id} goBack={history.goBack} />} />
					<Route path="/bureau" component={Bureau} />
					<Footer />
				</main>
			</Router>
		);
	}
}

export default App;
