import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import letter from '../res/letter-icon.png'
import socialFB from '../res/social-fb.svg'
import socialVK from '../res/social-vk.svg'
import socialIM from '../res/social-im.svg'

export default class Footer extends Component {
	render() {
		return (
			<footer style={{ backgroundColor: '#1A1A26' }}>
				<div className="container footer-content">
					<div className="row">
						<div className="col-sm-3">
							<div className="footer-title-wrapper">
								<h2 className="footer-title">Опора</h2>
							</div>
							<div className="footer-links d-none d-md-flex flex-column">
								<div className="footer-links-item">
									<Link className="footer-links-item-link" to="/bureau">Бюро</Link>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
							</div>
							<div className="footer-links d-flex d-md-none">
								<div className="footer-links-item">
									<Link className="footer-links-item-link" to="/bureau">Бюро</Link>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://opora66.ru" target='blank'>Опора</a>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="footer-title-wrapper">
								<h2 className="footer-title">Документы</h2>
							</div>
							<div className="footer-links d-none d-md-flex flex-column">
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/Устав-ОПОРЫ-РОССИИ-2017.pdf" target='blank'>Устав Опоры России</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/Положение-о-комитетах-и-.pdf" target='blank'>Положение о комитетах и комиссиях</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/ПОЛОЖЕНИЕ-о-региональном-и-местном-отделении.pdf" target='blank'>Положение о региональном и местном отделении</a>
								</div>
							</div>
							<div className="footer-links d-flex row d-md-none">
								<div className="footer-links-item col-12">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/Устав-ОПОРЫ-РОССИИ-2017.pdf" target='blank'>Устав Опоры России</a>
								</div>
								<div className="footer-links-item col-12">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/Положение-о-комитетах-и-.pdf" target='blank'>Положение о комитетах и комиссиях</a>
								</div>
								<div className="footer-links-item col-12">
									<a className="footer-links-item-link" href="http://zotov-test.ru/wp-content/uploads/2018/11/ПОЛОЖЕНИЕ-о-региональном-и-местном-отделении.pdf" target='blank'>Положение о региональном и местном отделении</a>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="footer-title-wrapper">
								<h2 className="footer-title">
									Подпишитесь на рассылку новостей
									</h2>
							</div>
							<form action="POST" className="col-12 footer-letter" style={{ marginTop: '80px' }}>
								<div className="row footer-letter-input">
									<input className="col footer-letter-input-field" type="text" placeholder="Введите свой email" />
									<button className=" col-1 footer-letter-input-submit-button">
										<img src={letter} alt="submit icon" />
									</button>
								</div>
							</form>
							<div className="row footer-social" style={{ marginTop: '25px' }}>
								<a className="footer-social-item" href="https://www.instagram.com/opora_66/" target='blank'>
									<img src={socialIM} alt="facebook" className="footer-social-item-icon" />
								</a>
								<a className="footer-social-item" href="https://vk.com/oporaekb " target='blank'>
									<img src={socialVK} alt="facebook" className="footer-social-item-icon" />
								</a>
								<a className="footer-social-item" href="https://www.facebook.com/groups/oporaural/?ref=bookmarks " target='blank'>
									<img src={socialFB} alt="facebook" className="footer-social-item-icon" />
								</a>
							</div>
						</div>
					</div>
					<div className="row footer-credits" style={{ marginTop: '30px' }}>
						<div className="col-lg-6">
							<p className="footer-credits-text">© 2018 <span>ОПОРА</span> . ВСЕ ПРАВА ЗАЩИЩЕНЫ . <br className="d-md-none" /> <a href="http://zotov.one">ZotovDA</a></p>
						</div>
						<div className="col-lg-6">
							<p className="footer-credits-text contact">Остались вопросы? Мы поможем. <br className="d-md-none" /> Звоните нам: <span>+7 (343) 382-23-48</span></p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
