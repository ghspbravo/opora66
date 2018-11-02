import React, { Component } from 'react';
import 'normalize.css'
import './App.css';

import brand from './res/brand.png'

import Banner from './components/Banner'
import About from './components/About';
import Progress from './components/Progress';
import Publications from './components/Publications';
import Map from './components/Map';
import Management from './components/Management';
import Reviews from './components/Reviews';
import Steps from './components/Steps';
import Payments from './components/Payments';
import Partners from './components/Partners';
import Contacts from './components/Contacts';
import Adress from './components/Adress';

class App extends Component {
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

	render() {
		return (
			<main>
				<div className="container-fluid">
					<div className="row align-items-center header">
						<div className="header-brand">
							<img src={brand} alt="brand name"/>
						</div>
						<nav className="col row justify-content-center header-nav">
							<a className="header-nav-item" href="#about">О нас</a>
							<a className="header-nav-item" href="#about">Новости</a>
							<a className="header-nav-item" href="#about">Проекты</a>
							<a className="header-nav-item" href="#about">Контакты</a>
							<a className="header-nav-item" href="#about">Члены правления</a>
						</nav>
						<div className="col-lg-2 header-controls">
							<button className="button button-acsent">Вступить</button>
						</div>
					</div>
				</div>
				<Banner />
				<About />
				<Progress />
				<Publications />
				<Map />
				<Management />
				<Reviews />
				<Steps />
				<Payments />
				<Partners />
				<Contacts />
				<Adress />
			</main>
		);
	}
}

export default App;
