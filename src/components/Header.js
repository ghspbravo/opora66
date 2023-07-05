import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import burger from '../res/burger.svg'
import brand from '../res/LogoWithTextRegion.png'

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

	render() {

		return (
			<header className="container-fluid">
				<div className="row align-items-center header">
					<div className="header-brand d-flex align-items-center">
						<Link to='/'>
							<img onClick={() => window.scrollTo({
								left: 0,
								top: 0,
								behavior: 'smooth'
							})} src={brand} alt="brand name" />
						</Link>
					</div>
					<nav className="col d-lg-flex d-none row justify-content-center header-nav nav-desktop">
						<HashLink className="header-nav-item" to="/#about">О нас</HashLink>
						<HashLink className="header-nav-item" to="/#publications">Новости</HashLink>
						<Link className="header-nav-item" to="/bureau">Бюро</Link>
						<Link className="header-nav-item" to="/video">Видео</Link>
						<Link className="header-nav-item" to="/projects">Проекты</Link>
						<HashLink className="header-nav-item" to="/#contacts">Контакты</HashLink>
						{/* <HashLink className="header-nav-item" to="/#management">Члены Организации</HashLink> */}
					</nav>
					<div className="col col-lg-2 header-controls d-none d-md-block">
						<button onClick={() => document.querySelector('#payments').scrollIntoView({
							behavior: 'smooth'
						})} className="button button-acsent">Вступить</button>
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
