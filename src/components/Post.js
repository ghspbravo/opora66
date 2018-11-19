import React, { Component } from 'react'

import Parser from 'html-react-parser';

export default class Post extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: null,
			isLoading: true
		}
	}

	componentDidMount() {
		fetch(`${this.props.server}/posts/${this.props.id}`)
			.then(data => data.json())
			.then(data => this.setState({
				post: data,
				isLoading: false,
			}))
			.catch(() => this.setState({
				isLoading: false,
			}))
	}

	render() {
		return (
			<div className='post-single'>
				{this.state.post
					? <div className="container">
						<button className="post-single-back" onClick={() => this.props.goBack()} >← Назад</button>
						<h1>{this.state.post.title.rendered}</h1>
						{Parser(this.state.post.content.rendered)}
					</div>
					: this.state.isLoading
						? <div style={{height: '80vh'}}>
							<p>Загрузка...</p>
						</div>
						: <div className="container">
							<h1>Что-то пошло не так</h1>
							<p>Запись не найдена..</p>
							<button className="post-single-back" onClick={() => this.props.goBack()} >← Назад</button>
						</div>
				}
			</div>
		)
	}
}
