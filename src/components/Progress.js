import React, { Component } from 'react'

export default class Progress extends Component {
    render() {
        return (
            <section id="progress" className="section-light">
                <div className="container-fluid section-content">
                    <div className="row progress-wrapper">
                        <div className="col progress-step">
                            <p className="progress-description">
                                Совет по содействию развитию малого и среднего предпринимательства при Полномочном представителе Президента РФ в УрФО
                            </p>
                        </div>
                        <div className="col offset-lg-1 progress-step">
                            <p className="progress-description">
                                Совет по развитию малого и среднего предпринимательства в Свердловской области при Правительстве СО
                            </p>
                        </div>
                        <div className="col offset-lg-1 progress-step">
                            <p className="progress-description">
                                Общественный Совет по защите малого и среднего бизнеса при Прокуратуре Свердловской области
                            </p>
                        </div>
                        <div className="col offset-lg-1 progress-step">
                            <p className="progress-description">
                                Инвестиционный Совет при Губернаторе СО
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
