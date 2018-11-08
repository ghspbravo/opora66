import React, { Component } from 'react';
import 'normalize.css'
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Post from './components/Post';

class App extends Component {

	SERVER = 'https://zotov-test.ru/wp-json/wp/v2'

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
			<Router>
				<main>
					<Header />
					<Route path={"/"} exact render={() => <Main server={this.SERVER} />} />
					<Route path={"/p=:id"} render={({ match }) => <Post server={this.SERVER} id={match.params.id} />} />
					<Footer />
				</main>
			</Router>
		);
	}
}

export default App;
