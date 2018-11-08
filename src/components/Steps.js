import React, { Component } from 'react'

import tablet_arrow from '../res/down-arrow-tablet.svg'

export default class Steps extends Component {
    render() {
        return (
            <section id="#steps" className="section-acsent">
                <div className="container-fluid section-content">
                    <div className="d-xl-flex d-none row no-gutters steps-wrapper justify-content-center">
                        <div className="step d-flex align-items-center justify-content-center">
                            <p className="step-content">Вступи в Опору России</p>
                        </div>
                        <div className="step d-flex align-items-center justify-content-center">
                            <p className="step-content">Получи поддержку для бизнеса</p>
                        </div>
                        <div className="step d-flex align-items-center justify-content-center">
                            <p className="step-content">Защити свои интересы</p>
                        </div>
                        <div className="step d-flex align-items-center justify-content-center">
                            <p className="step-content">Учавствуй в Разработке Законов</p>
                        </div>
                    </div>
                    <div className="d-flex d-xl-none row justify-content-center">
                        <img src={tablet_arrow} alt="" className="col-md-1 col-2 d-xl-none" />
                        <div className="col d-flex flex-column align-items-center">
                            <div className="step d-flex align-items-center justify-content-center">
                                <p className="step-content">Вступи в Опору России</p>
                            </div>
                            <div className="step d-flex align-items-center justify-content-center">
                                <p className="step-content">Получи поддержку для бизнеса</p>
                            </div>
                            <div className="step d-flex align-items-center justify-content-center">
                                <p className="step-content">Защити свои интересы</p>
                            </div>
                            <div className="step d-flex align-items-center justify-content-center">
                                <p className="step-content">Учавствуй в Разработке Законов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
