import React, { Component } from 'react'

import achieve_icon_1 from '../res/achieve-icon-1.png'
import achieve_icon_2 from '../res/achieve-icon-2.png'
import achieve_icon_3 from '../res/achieve-icon-3.png'
import achieve_icon_4 from '../res/achieve-icon-4.png'
import achieve_icon_5 from '../res/achieve-icon-5.png'
import achieve_icon_6 from '../res/achieve-icon-world.png'

// import person from '../res/management_person.png'

// import facebook from '../res/social-fb.svg'

export default class Reviews extends Component {
  componentDidMount() {
    window.$('.review-wrapper').slick({
      dots: true,
      arrows: false,
    });
  }
  render() {
    return (
      <div id="#reviews">
        <div className="row no-gutters">
          <div className="section-acsent-light col-12 col-lg-6 col-xl-4">
            <div className="row achievments-wrapper">
              <div className="achievement-item flex-column d-flex align-items-center col-6">
                <h4 className="achieve-number">20 лет</h4>
                <p className="achieve-description">Успешной работы</p>
                <img className="achieve-icon" src={achieve_icon_1} alt="achieve icon" />
              </div>
              <div className="achievement-item flex-column d-flex align-items-center col-6">
                <h4 className="achieve-number">450тыс.+</h4>
                <p className="achieve-description">Активных предпринимателей со всей России</p>
                <img className="achieve-icon" src={achieve_icon_2} alt="achieve icon" />
              </div>
              <div className="achievement-item flex-column d-flex align-items-center col-6">
                <h4 className="achieve-number">100+</h4>
                <p className="achieve-description">Отраслевых и предпринимательских объединений</p>
                <img className="achieve-icon" src={achieve_icon_3} alt="achieve icon" />
              </div>
              <div className="achievement-item flex-column d-flex align-items-center col-6">
                <h4 className="achieve-number">85</h4>
                <p className="achieve-description">Региональных отделений</p>
                <img className="achieve-icon" src={achieve_icon_4} alt="achieve icon" />
              </div>
              <div className="achievement-item flex-column d-flex align-items-center col-6">
                <h4 className="achieve-number">400+</h4>
                <p className="achieve-description">Местных отделений</p>
                <img className="achieve-icon" src={achieve_icon_5} alt="achieve icon" />
              </div>
              <a className="__withoutLine achievement-item __withHover flex-column d-flex align-items-center col-6" href="https://opora.ru/world/" target="_blank" rel="noopener noreferrer">
                <h4 className="achieve-number">&nbsp;</h4>
                <p className="achieve-description">Международная деятельность</p>
                <img className="achieve-icon" src={achieve_icon_6} alt="achieve icon" />
              </a>
            </div>
          </div>
          <section className="d-flex flex-column justify-content-center section-content section-dark col-lg-6 col-xl-8" style={{ paddingBottom: '30px' }} >
            <div className="section-title section-title-simplified title-center">
              <h1 className="section-name">Отзывы</h1>
              <h2 className="section-description">Мнения наших коллег</h2>
            </div>
            <div className="review-wrapper" style={{ marginTop: '20px' }}>
              <div className="row no-gutters justify-content-center review-item d-flex">
                {/* <img className="author-photo" src={person} alt="author" /> */}
                <p className="review-text">
                  С ОПОРОЙ РОССИИ я познакомился в конце 2018 года, благодаря проекту "Ты-предприниматель". Когда пришел на первую образовательную программу, нам презентовали огромное сообщество предпринимателей, и я понял что это то, чего мне не хватало - окружение активных, позитивных и меняющих мир людей. Находясь в этой среде, очень трудно оставаться на прежнем уровне. Я очень рад найти таких людей и иметь возможность с ними общаться.
                                </p>
                <div className="review-author-info" style={{ marginTop: '50px' }}>
                  <div className="author-name">Роман Чередниченко</div>
                  {/* <div style={{ marginTop: '5px' }} className="author-occupation">Чем занимается</div> */}
                  {/* <div className="row justify-content-center author-social" style={{ marginTop: '20px' }}>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                    </div> */}
                </div>
              </div>
              <div className="row no-gutters justify-content-center review-item d-flex">
                {/* <img className="author-photo" src={person} alt="author" /> */}
                <p className="review-text">
                  С ОПОРОЙ РОССИИ я познакомился в 2018 г. помимо знакомства с новыми и интересными людьми, я нашёл единомышленников и первых клиентов своего нового бизнеса TITAN STYLE- крутые украшения из титана.
                                </p>
                <div className="review-author-info" style={{ marginTop: '50px' }}>
                  <div className="author-name">Андрей Евланов</div>
                  {/* <div style={{ marginTop: '5px' }} className="author-occupation">Чем занимается</div>
                                    <div className="row justify-content-center author-social" style={{ marginTop: '20px' }}>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                        <a className="author-social-item" href="http://opora66.ru"><img src={facebook} alt="" /></a>
                                    </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
