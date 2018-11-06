import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import burger from '../res/burger.svg'
import brand from '../res/brand.png'

export default class Header extends Component {
	handleMobileNavOpen = (e) => {
		let wrapper = document.querySelector('.nav-mobile-wrapper')
		let menu = document.querySelector('.nav-mobile')

		wrapper.style.display = 'block';

		setTimeout(() => {
			wrapper.style.opacity = 1;
			menu.style.left = 0;
		}, 10)
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
			<header className="container-fluid">
				<div className="row align-items-center header">
					<div className="header-brand">
						<Link to='/'>
							<img src={brand} alt="brand name" />
						</Link>
					</div>
					<nav className="col d-lg-flex d-none row justify-content-center header-nav nav-desktop">
						<a className="header-nav-item" href="#about">О нас</a>
						<a className="header-nav-item" href="#publications">Новости</a>
						<a className="header-nav-item" href="#map">Проекты</a>
						<a className="header-nav-item" href="#contacts">Контакты</a>
						<a className="header-nav-item" href="#management">Члены правления</a>
					</nav>
					<nav className="d-lg-none nav-mobile-wrapper" onClick={this.handleMobileNavClose}>
						<div className="nav-mobile">
							<a className="header-nav-mobile-item" href="#about">О нас</a>
							<a className="header-nav-mobile-item" href="#publications">Новости</a>
							<a className="header-nav-mobile-item" href="#map">Проекты</a>
							<a className="header-nav-mobile-item" href="#contacts">Контакты</a>
							<a className="header-nav-mobile-item" href="#management">Члены правления</a>
						</div>
					</nav>
					<div className="col col-lg-2 header-controls d-none d-md-block">
						<button className="button button-acsent">Вступить</button>
					</div>
					<div className="col col-md-1 d-flex justify-content-end col-md d-lg-none mobile-burger-wrapper">
						<button onClick={this.handleMobileNavOpen} className="mobile-burger">
							<img src={burger} alt="menu" />
						</button>
					</div>
				</div>
			</header>
		)
	}
}
