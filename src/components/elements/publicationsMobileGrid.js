import React from 'react'

import { Link } from 'react-router-dom'

export default function publicationsMobileGrid(publications) {
	return (
		<div className="publication-mobile-container row justify-content-center d-xl-none" style={{ marginTop: '60px' }}>
			{publications
				? publications.map((publication, index) =>
					<div key={index} className="publication-item publication-compact" style={{
						backgroundImage: `url(${publication._embedded['wp:featuredmedia']
							? publication._embedded['wp:featuredmedia'][0].source_url
							: null})`
					}}>
						<div className="publication-content">
							<p className="publication-excerpt">{publication.title.rendered}</p>
							<Link className="publication-link" to={`p=${publication.id}`} >Читать</Link>
						</div>
					</div>
				)
				: null
			}
		</div>
	)
}
