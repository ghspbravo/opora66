// @ts-nocheck
import React, { Component } from 'react'

import video from '../res/oporaVideo.mp4'
import videoThumbnail from '../res/OporaBrand.png'

import Swiper from 'swiper';

/**
 * Fetch posts from Partner's category
 *
 * @param {string} server
 * @returns
 */
function fetchPartners(server) {
  const partnersId = 20;
  const api = `${server}/posts?categories=${partnersId}&_embed`;

  return fetch(api).then(result => {
    return result.json()
  })
}

export default class Partners extends Component {
  constructor(props) {
    super(props);

    this.state = { partners: [] };
  }

  componentDidMount() {

    fetchPartners(this.props.server).then(partners => {
      this.setState({
        partners
      })
    }).then(() => {
      const swiper = new Swiper(".partners-container", {
        slidesPerColumnFill: 'row',
        slidesPerView: 1,
        slidesPerColumn: 2,

        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          568: {
            slidesPerView: 2,
            slidesPerColumn: 3,
            spaceBetween: 30,
          }
        }
      });

      if (!swiper) alert('critical error in partners')
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
                <div className="partners-container swiper-container">

                  <div className="swiper-wrapper">

                    {this.state.partners.map((item) => <div key={item.id} className="swiper-slide partner-item">
                      <a target='_blank' rel="noopener noreferrer" href={item.title.rendered}><img src={item._embedded["wp:featuredmedia"] && item._embedded["wp:featuredmedia"][0].source_url} alt={item.title.rendered} /></a>
                    </div>)}

                  </div>

                  <div className="swiper-pagination"></div>
                </div>
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
