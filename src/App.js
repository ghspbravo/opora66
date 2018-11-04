import React, { Component } from 'react';
import 'normalize.css'
import './App.css';

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
import Header from './components/Header';
import Footer from './components/Footer';

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
				<Header />
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
				<Footer />
			</main>
		);
	}
}

export default App;
