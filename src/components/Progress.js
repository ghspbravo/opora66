import React, { Component } from 'react'

import tablet_arrow from '../res/down-arrow-tablet.svg'

export default class Progress extends Component {
    render() {
        return (
            <section id="progress" className="section-light">
                <div className="container-fluid section-content">
                    <div class="row">
                        <img src={tablet_arrow} alt="" className="col-md-1 col-2 d-lg-none" />
                        <div className="row col-lg-12 col-md-11 col-9 progress-wrapper">
                            <div className="col-lg col-12 progress-step">
                                <p className="progress-description">
                                    Совет по содействию развитию малого и среднего предпринимательства при Полномочном представителе Президента РФ в УрФО
                                </p>
                            </div>
                            <div className="col-lg col-12 offset-lg-1 progress-step">
                                <p className="progress-description">
                                    Совет по развитию малого и среднего предпринимательства в Свердловской области при Правительстве СО
                                </p>
                            </div>
                            <div className="col-lg col-12 offset-lg-1 progress-step">
                                <p className="progress-description">
                                    Общественный Совет по защите малого и среднего бизнеса при Прокуратуре Свердловской области
                                </p>
                            </div>
                            <div className="col-lg col-12 offset-lg-1 progress-step">
                                <p className="progress-description">
                                    Инвестиционный Совет при Губернаторе СО
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
