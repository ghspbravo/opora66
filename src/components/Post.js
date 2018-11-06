import React, { Component } from 'react'

import Parser from 'html-react-parser';

export default class Post extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: null
		}
	}

	componentDidMount() {
		fetch(`${this.props.server}/posts/${this.props.id}`)
			.then(data => data.json())
			.then(data => this.setState({
				post: data
			}))
	}

	render() {
		return (
			<main className='post-single' style={{ marginTop: '100px' }}>
				{this.state.post
					? <div className="container">
					<h1>{this.state.post.title.rendered}</h1>
						{Parser(this.state.post.content.rendered)}
				</div>
					: null
				}
			</main>
		)
	}
}
