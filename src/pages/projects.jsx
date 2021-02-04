import React, { Component } from "react";

import "./projects.css";
import { Link } from "react-router-dom";

async function fetchProjects(server) {
	return fetch(`${server}/posts?categories=21&per_page=100&_embed`)
		.then((data) => data.json())
		.then((data) => {
			const result = data.map((item) => {
				return {
					id: item.id,
					title: item.title.rendered,
					image: item._embedded["wp:featuredmedia"] && item._embedded["wp:featuredmedia"][0].source_url
				};
			});
			return result;
		});
}

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projectsList: []
		};
	}

	componentDidMount() {
		fetchProjects(this.props.server).then((projectsList) => {
			this.setState({
				projectsList
			});
		});

		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<div className='container'>
					<button className='post-single-back' onClick={this.props.goBack}>
						← Назад
					</button>
					<h1>Проекты</h1>

					<div className='row justify-content-center'>
						{this.state.projectsList.length > 0 &&
							this.state.projectsList.map((project) => (
								<Link key={project.id} to={`/projects/p=${project.id}`} className='col-12 col-md-4 col-lg-3'>
									<div className='project-wrapper' style={{ backgroundImage: `url(${project.image})` }}>
										<h4 className='project-title'>{project.title}</h4>
									</div>
								</Link>
							))}
					</div>
				</div>
			</div>
		);
	}
}
