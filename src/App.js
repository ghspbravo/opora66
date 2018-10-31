import React, { Component } from 'react';
import 'normalize.css'
import './App.css';

import brand from './res/brand.png'

import Banner from './components/Banner'
import About from './components/About';
import Progress from './components/Progress';
import Publications from './components/Publications';

class App extends Component {
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
							<button className="button-acsent">Вступить</button>
						</div>
					</div>
				</div>
				<Banner />
				<About />
				<Progress />
				<Publications />
			</main>
		);
	}
}

export default App;
