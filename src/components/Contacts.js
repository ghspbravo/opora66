import React, { Component } from 'react'

import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

export default class Contacts extends Component {
  render() {
    return (
      <section id="contacts" className="section-side-left">
        <div className="section-content container">
          <div className="row">
            <div className="col-lg-6 image-bordered contacts-map">
              <YMaps>
                <Map defaultState={{
                  center: [56.843747, 60.571414],
                  zoom: 14
                }}
                  width="100%"
                  height="100%">
                  <Placemark geometry={[56.843747, 60.571414]} />
                  <ZoomControl
                    options={{
                      size: 'small',
                      zoomDuration: 1000,
                    }} />
                </Map>
              </YMaps>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="section-description">Свяжись с нами</h2>
              </div>
              <div>
                <h1 className="adress-city">Екатеринбург</h1>
                <p className="adress-description">
                  <b>Юридический адрес</b>:
                    <br className="d-sm-none" />620075, г. Екатеринбург,
                    <br className="d-sm-none" /> пр-т. Ленина, д.54, корп.4, кв. 171-172
                    <br /> <b>Фактический адрес</b>:
                    <br className="d-sm-none" />620014, г. Екатеринбург,
                    <br className="d-sm-none" /> ул. Юмашева, д.11
                    <br /> <b>С понедельника по пятницу</b>:
                    <br className="d-sm-none" /> с 10:00 до 18:00
                    <br /> +7 (343) 382-23-48
                    <br /> <a href="mailto:opora-66@mail.ru">opora-66@mail.ru</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
