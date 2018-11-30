import React, { Component } from 'react'

import stroitelstvo from '../res/comitet-stroitelstvo.png'
import bozopasnost from '../res/comitet-bozopasnost.png'
import energ from '../res/comitet-energ.png'
import invest from '../res/comitet-invest.png'
import loyalnost from '../res/comitet-loyalnost.png'
import molod from '../res/comitet-molod.png'
import svyaz from '../res/comitet-svyaz.png'
import tovary from '../res/comitet-tovary.png'
import transport from '../res/comitet-transport.png'
import turism from '../res/comitet-turism.png'
import woman from '../res/comitet-woman.png'
import priroda from '../res/comitet-priroda.png'
import dom from '../res/comitet-dom.png'
import refresh from '../res/comitet-refresh.png'
import media from '../res/comitet-media.png'

export default class Comitets extends Component {
	componentDidMount() {
		window.$('.comitets-wrapper').slick({
			dots: true,
			arrows: false,
		});
	}

	render() {
		return (
			<section id="comitets">
				<div className="container-fluid section-content">
					<div className="section-title title-center">
						<h1 className="section-name">Сферы деятельности</h1>
						<h2 className="section-description">Комитеты и комиссии</h2>
					</div>
					{window.innerWidth > 568
						? <div className="comitets-wrapper">
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={woman} alt="" />
									</div>
									<p>Комитет по развитию женского предпринимательства</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={molod} alt="" />
									</div>
									<p>Комитет по молодежному предпринимательству</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={stroitelstvo} alt="" />
									</div>
									<p>Комитет по строительству</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={turism} alt="" />
									</div>
									<p>Комитет по туризму</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={tovary} alt="" />
									</div>
									<p>Комитет по защите прав в сфере закупок</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={loyalnost} alt="" />
									</div>
									<p>Комитет по оценке регулирующего воздействия</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={bozopasnost} alt="" />
									</div>
									<p>Комитет по средствам технической безопасности</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={priroda} alt="" />
									</div>
									<p>Комитет по природопользованию и экологии</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={svyaz} alt="" />
									</div>
									<p>Комитет по международным связям</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={energ} alt="" />
									</div>
									<p>Комитет по энергетике</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={invest} alt="" />
									</div>
									<p>Комитет по инвестициям</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={transport} alt="" />
									</div>
									<p>Комитет по транспорту</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={dom} alt="" />
									</div>
									<p>Комитет по модернизации инфраструктуры жилищно-коммунального хозяйства</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={refresh} alt="" />
									</div>
									<p>Комиссия по клининговой деятельности и обращению с отходами производства и потребления</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={media} alt="" />
									</div>
									<p>Комиссия по art, медиа и киноиндустрии</p>
								</div>
							</div>
						</div>
						: <div className="comitets-wrapper">
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={woman} alt="" />
									</div>
									<p>Комитет по развитию женского предпринимательства</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={molod} alt="" />
									</div>
									<p>Комитет по молодежному предпринимательству</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={stroitelstvo} alt="" />
									</div>
									<p>Комитет по строительству</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={turism} alt="" />
									</div>
									<p>Комитет по туризму</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={tovary} alt="" />
									</div>
									<p>Комитет по защите прав в сфере закупок</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={loyalnost} alt="" />
									</div>
									<p>Комитет по оценке регулирующего воздействия</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={bozopasnost} alt="" />
									</div>
									<p>Комитет по средствам технической безопасности</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={priroda} alt="" />
									</div>
									<p>Комитет по природопользованию и экологии</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={svyaz} alt="" />
									</div>
									<p>Комитет по международным связям</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={energ} alt="" />
									</div>
									<p>Комитет по энергетике</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={invest} alt="" />
									</div>
									<p>Комитет по инвестициям</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={transport} alt="" />
									</div>
									<p>Комитет по транспорту</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={dom} alt="" />
									</div>
									<p>Комитет по модернизации инфраструктуры жилищно-коммунального хозяйства</p>
								</div>
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={refresh} alt="" />
									</div>
									<p>Комиссия по клининговой деятельности и обращению с отходами производства и потребления</p>
								</div>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<div className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={media} alt="" />
									</div>
									<p>Комиссия по art, медиа и киноиндустрии</p>
								</div>
							</div>
						</div>
					}
				</div>
			</section>
		)
	}
}
