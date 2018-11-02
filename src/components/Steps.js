import React, { Component } from 'react'

export default class Steps extends Component {
    render() {
        return (
            <section id="#steps" className="section-acsent">
                <div class="container-fluid section-content">
                    <div className="row no-gutters steps-wrapper">
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
            </section>
        )
    }
}
