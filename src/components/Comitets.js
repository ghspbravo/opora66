import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
import social from '../res/comitet-social.png'
import selhos from '../res/comitet-selhos.png'
import police from '../res/comitet-police.png'

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
					{window.innerWidth >= 768
						? <div className="comitets-wrapper">
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=242' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={woman} alt="" />
									</div>
									<p>Комитет по развитию женского предпринимательства</p>
								</Link>
								<Link to='p=240' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={molod} alt="" />
									</div>
									<p>Комитет по молодежному предпринимательству</p>
								</Link>
								<Link to='p=244' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={stroitelstvo} alt="" />
									</div>
									<p>Комитет по строительству</p>
								</Link>
								<Link to='p=246' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={turism} alt="" />
									</div>
									<p>Комитет по туризму</p>
								</Link>
								<Link to='p=248' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={tovary} alt="" />
									</div>
									<p>Комитет по защите прав в сфере закупок</p>
								</Link>
								<Link to='p=250' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={loyalnost} alt="" />
									</div>
									<p>Комитет по оценке регулирующего воздействия</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=252' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={bozopasnost} alt="" />
									</div>
									<p>Комитет по средствам технической безопасности</p>
								</Link>
								<Link to='p=254' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={priroda} alt="" />
									</div>
									<p>Комитет по природопользованию и экологии</p>
								</Link>
								<Link to='p=256' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={svyaz} alt="" />
									</div>
									<p>Комитет по международным связям</p>
								</Link>
								<Link to='p=258' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={energ} alt="" />
									</div>
									<p>Комитет по энергетике</p>
								</Link>
								<Link to='p=238' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={invest} alt="" />
									</div>
									<p>Комитет по инвестициям</p>
								</Link>
								<Link to='p=260' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={transport} alt="" />
									</div>
									<p>Комитет по транспорту</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=236' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={dom} alt="" />
									</div>
									<p>Комитет по модернизации инфраструктуры жилищно-коммунального хозяйства</p>
								</Link>
								<Link to='p=1561' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={social} alt="" />
									</div>
									<p>Комитет по социальному предпринимательству</p>
								</Link>
								<Link to='p=1563' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={selhos} alt="" />
									</div>
									<p>Комитет по сельскому хозяйству</p>
								</Link>
								<Link to='p=1565' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={police} alt="" />
									</div>
									<p>Комитет по взаимодействию с силовыми структурами</p>
								</Link>
								<Link to='p=232' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={refresh} alt="" />
									</div>
									<p>Комиссия по клининговой деятельности и обращению с отходами производства и потребления</p>
								</Link>
								<Link to='p=234' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={media} alt="" />
									</div>
									<p>Комиссия по art, медиа и киноиндустрии</p>
								</Link>
							</div>
						</div>
						: <div className="comitets-wrapper">
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=242' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={woman} alt="" />
									</div>
									<p>Комитет по развитию женского предпринимательства</p>
								</Link>
								<Link to='p=240' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={molod} alt="" />
									</div>
									<p>Комитет по молодежному предпринимательству</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=244' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={stroitelstvo} alt="" />
									</div>
									<p>Комитет по строительству</p>
								</Link>
								<Link to='p=246' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={turism} alt="" />
									</div>
									<p>Комитет по туризму</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=248' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={tovary} alt="" />
									</div>
									<p>Комитет по защите прав в сфере закупок</p>
								</Link>
								<Link to='p=250' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={loyalnost} alt="" />
									</div>
									<p>Комитет по оценке регулирующего воздействия</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=252' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={bozopasnost} alt="" />
									</div>
									<p>Комитет по средствам технической безопасности</p>
								</Link>
								<Link to='p=254' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={priroda} alt="" />
									</div>
									<p>Комитет по природопользованию и экологии</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=256' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={svyaz} alt="" />
									</div>
									<p>Комитет по международным связям</p>
								</Link>
								<Link to='p=258' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={energ} alt="" />
									</div>
									<p>Комитет по энергетике</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=238' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={invest} alt="" />
									</div>
									<p>Комитет по инвестициям</p>
								</Link>
								<Link to='p=260' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={transport} alt="" />
									</div>
									<p>Комитет по транспорту</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
								<Link to='p=236' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={dom} alt="" />
									</div>
									<p>Комитет по модернизации инфраструктуры жилищно-коммунального хозяйства</p>
								</Link>
								<Link to='p=1561' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={social} alt="" />
									</div>
									<p>Комитет по социальному предпринимательству</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
							<Link to='p=1563' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={selhos} alt="" />
									</div>
									<p>Комитет по сельскому хозяйству</p>
								</Link>
								<Link to='p=1565' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={police} alt="" />
									</div>
									<p>Комитет по взаимодействию с силовыми структурами</p>
								</Link>
							</div>
							<div className="row d-flex no-gutters comitets-list">
							<Link to='p=232' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={refresh} alt="" />
									</div>
									<p>Комиссия по клининговой деятельности и обращению с отходами производства и потребления</p>
								</Link>
								<Link to='p=234' className="comitets-item col-md-4 d-flex flex-column align-items-center">
									<div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
										<img src={media} alt="" />
									</div>
									<p>Комиссия по art, медиа и киноиндустрии</p>
								</Link>
							</div>
						</div>
					}
				</div>
			</section>
		)
	}
}
