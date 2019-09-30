// @ts-nocheck
import React, { Component } from 'react'

import sber from '../res/partners/sber.png'
import asi from '../res/partners/asi.png'
import contur from '../res/partners/contur.png'
import ministryRazvit from '../res/partners/ministryRazvit.png'
import mrck from '../res/partners/mrck.png'
import policyDepart from '../res/partners/policyDepart.png'
import selhos from '../res/partners/selhos.png'
import uralSib from '../res/partners/uralSib.png'
import zawitaPrav from '../res/partners/zawitaPrav.png'
import alpha from '../res/partners/alpha.png'
import psb from '../res/partners/psb.png'

import invest from '../res/partners/invest.jpeg'

import video from '../res/oporaVideo.mp4'
import videoThumbnail from '../res/OporaBrand.png'


export default class Partners extends Component {
    componentDidMount() {
        window.$('.partners-wrapper').slick({
            dots: true,
            arrows: false,
        })
    }
    render() {
        return (
            <section id="partners" className="section-dark" style={{ padding: 0 }}>
                <div className="section-content">
                    <div className="row no-gutters">
                        <section className="col-lg-7 d-flex justify-content-center">
                            <div className="col-lg-9">
                                <div className="section-title title-center">
                                    <div className="section-name">Мы строим доверие</div>
                                    <div className="section-description">Наши партнеры</div>
                                </div>
                                {window.innerWidth > 568
                                    ? <div className="partners-wrapper">
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.sberbank.ru/ru/person"><img src={sber} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.rshb.ru/ "><img src={selhos} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://new.uralsib.ru/"><img src={uralSib} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://uzpp.midural.ru/ "><img src={zawitaPrav} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://www.midural.ru/ "><img src={policyDepart} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://mir.midural.ru/ "><img src={ministryRazvit} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://asi.ru/ "><img src={asi} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://kontur.ru/?utm_source=GoogleAdwords&utm_medium=cpc&utm_content=kontur&utm_campaign=portal_adwords&p=1210&gclid=EAIaIQobChMIrqCTl-yA3gIV0eeaCh0ahAwkEAAYASAAEgLwzfD_BwE"><img src={contur} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.mrsk-ural.ru/"><img src={mrck} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://invest-in-ural.ru/"><img src={invest} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://alfabank.ru/"><img src={alpha} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.psbank.ru/"><img src={psb} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="partners-wrapper">
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.sberbank.ru/ru/person"><img src={sber} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.rshb.ru/ "><img src={selhos} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://new.uralsib.ru/"><img src={uralSib} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://uzpp.midural.ru/ "><img src={zawitaPrav} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://www.midural.ru/ "><img src={policyDepart} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://mir.midural.ru/ "><img src={ministryRazvit} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://asi.ru/ "><img src={asi} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://kontur.ru/?utm_source=GoogleAdwords&utm_medium=cpc&utm_content=kontur&utm_campaign=portal_adwords&p=1210&gclid=EAIaIQobChMIrqCTl-yA3gIV0eeaCh0ahAwkEAAYASAAEgLwzfD_BwE"><img src={contur} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.mrsk-ural.ru/"><img src={mrck} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="http://invest-in-ural.ru/"><img src={invest} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                        <div className="row d-flex no-gutters partners-list justify-content-center">
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://alfabank.ru/"><img src={alpha} alt="partner logo" /></a>
                                            </div>
                                            <div className="partner-item d-flex align-content-center justify-items-center">
                                                <a target='blank' href="https://www.psbank.ru/"><img src={psb} alt="partner logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </section>
                        <div className="col-lg-5 d-flex image-bordered flex-column align-items-center justify-content-center partners-video">
                            <video width="90%" controls muted poster={videoThumbnail}>
                                <source src={video} type="video/mp4" />
                                Your browser does not support html5 video.
                                </video>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
