import React, { Component } from 'react'

import letter from '../res/letter-icon.png'
import social from '../res/social-fb.svg'

export default class Footer extends Component {
	render() {
		return (
			<footer style={{ backgroundColor: '#1A1A26' }}>
				<div class="container footer-content">
					<div class="row">
						<div className="col-sm-6">
							<div className="footer-title-wrapper">
								<h2 className="footer-title">Опора</h2>
							</div>
							<div className="footer-links d-none d-md-flex flex-column">
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
							</div>
							<div className="footer-links d-flex d-md-none">
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
								</div>
								<div className="footer-links-item">
									<a className="footer-links-item-link" href="">Опора</a>
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
								<a className="footer-social-item" href="">
									<img src={social} alt="facebook" className="footer-social-item-icon" />
								</a>
								<a className="footer-social-item" href="">
									<img src={social} alt="facebook" className="footer-social-item-icon" />
								</a>
								<a className="footer-social-item" href="">
									<img src={social} alt="facebook" className="footer-social-item-icon" />
								</a>
								<a className="footer-social-item" href="">
									<img src={social} alt="facebook" className="footer-social-item-icon" />
								</a>
							</div>
						</div>
					</div>
					<div className="row footer-credits" style={{ marginTop: '30px' }}>
						<div className="col-lg-6">
							<p className="footer-credits-text">© 2018 <span>ОПОРА</span> . ВСЕ ПРАВА ЗАЩИЩЕНЫ . Дизайн <span>Brus</span></p>
						</div>
						<div className="col-lg-6">
							<p className="footer-credits-text contact">Остались вопросы? Мы поможем. Звоните нам: <span>+7 999 999 99 99</span></p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
