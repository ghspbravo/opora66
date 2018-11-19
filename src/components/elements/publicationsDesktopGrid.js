import React from 'react'

import { Link } from 'react-router-dom'

export default function publicationsDesktopGrid(publications, gridsCount) {
	return (
		<div className="publications-container row d-xl-flex d-none" style={{ marginTop: '60px' }}>
			{publications
				? gridsCount.map((data, index) => <div key={index} className="publications-container no-gutters row d-xl-flex d-none" style={{ marginTop: '60px' }}>
					<div className="flex-column">
						{publications[0 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[0]._embedded['wp:featuredmedia']
									? publications[0]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[0 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[0 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[2 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[2 + 10 * index]._embedded['wp:featuredmedia']
									? publications[2 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[2 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[2 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[5 + 10 * index]
							? <div className="publication-item publication-large" style={{
								backgroundImage: `url(${publications[5 + 10 * index]._embedded['wp:featuredmedia']
									? publications[5 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[5 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[5 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
					</div>
					<div className="flex-column">
						{publications[1 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[1 + 10 * index]._embedded['wp:featuredmedia']
									? publications[1 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[1 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[1 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[3 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[3 + 10 * index]._embedded['wp:featuredmedia']
									? publications[3 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[3 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[3 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[6 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[6 + 10 * index]._embedded['wp:featuredmedia']
									? publications[6 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[6 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[6 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[8 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[8 + 10 * index]._embedded['wp:featuredmedia']
									? publications[8 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[8 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[8 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
					</div>
					<div className="flex-column">
						{publications[4 + 10 * index]
							? <div className="publication-item publication-large" style={{
								backgroundImage: `url(${publications[4 + 10 * index]._embedded['wp:featuredmedia']
									? publications[4 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[4 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[4 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[7 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[7 + 10 * index]._embedded['wp:featuredmedia']
									? publications[7 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[7 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[7 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
						{publications[9 + 10 * index]
							? <div className="publication-item publication-compact" style={{
								backgroundImage: `url(${publications[9 + 10 * index]._embedded['wp:featuredmedia']
									? publications[9 + 10 * index]._embedded['wp:featuredmedia'][0].source_url
									: null})`
							}}>
								<div className="publication-content">
									<p className="publication-excerpt">{publications[9 + 10 * index].title.rendered}</p>
									<Link className="publication-link" to={`p=${publications[9 + 10 * index].id}`} >Читать</Link>
								</div>
							</div>
							: null
						}
					</div>
				</div>)
				: <div className="publications-container row d-xl-flex d-none" style={{ marginTop: '60px' }}>
					<div className="flex-column">
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-large" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
					</div>
					<div className="flex-column">
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
					</div>
					<div className="flex-column">
						<div className="publication-item publication-large" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
						<div className="publication-item publication-compact" style={{ backgroundColor: 'lightgray' }}>
							<div className="publication-content">
								<p className="publication-excerpt"></p>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}
