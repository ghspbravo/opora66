import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Swiper from 'swiper';

/**
 * Fetch posts from Comitet's category
 *
 * @param {string} server
 * @returns
 */
function fetchComitets(server) {
  const comitetsId = 16;
  const api = `${server}/posts?categories=${comitetsId}&_embed&&per_page=100`;

  return fetch(api).then(result => {
    return result.json()
  })
}

export default class Comitets extends Component {
  constructor(props) {
    super(props);

    this.state = { comitets: [] };
  }

  componentDidMount() {
    fetchComitets(this.props.server).then(comitets => {
      this.setState({
        comitets
      })
    }).then(() => {
      const swiper = new Swiper(".comitets-container", {
        slidesPerColumnFill: 'row',

        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 30,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          568: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 20,
          }
        }
      });

      if (!swiper) alert('critical error in partners')
    })
  }

  render() {
    return (
      <section id="comitets">
        <div className="container-fluid section-content">
          <div className="section-title title-center">
            <h1 className="section-name">Сферы деятельности</h1>
            <h2 className="section-description">Комитеты и комиссии</h2>
          </div>
          <div className="comitets-container swiper-container">
            <div class="swiper-wrapper">
              {this.state.comitets.map(comitet => < Link key={comitet.id} to={`p=${comitet.id}`} className="swiper-slide comitets-item">
                <div className="comitets-item-thumbnail d-flex justify-content-center align-items-center">
                  <img src={comitet._embedded["wp:featuredmedia"] && comitet._embedded["wp:featuredmedia"][0].source_url} alt={comitet.title.rendered} alt="" />
                </div>
                <p>{comitet.title.rendered}</p>
              </Link>)}

            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section >
    )
  }
}
