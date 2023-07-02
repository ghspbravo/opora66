import React, { Component } from 'react'

export default class Adress extends Component {
    render() {
        return (
            <section id="adress" className="section-light">
                <h1 className="adress-city">Екатеринбург</h1>
                <p className="adress-description">
                    <b>Юридический адрес</b>: 
                    <br className="d-sm-none"/>620075, г. Екатеринбург,
                    <br className="d-sm-none"/> пр-т. Ленина, д.54, корп.4, кв. 171-172
                    <br/> <b>Фактический адрес</b>:
                    <br className="d-sm-none"/>620142, г. Екатеринбург,
                    <br className="d-sm-none"/> ул. 8 Марта, д.149
                    <br /> <b>С понедельника по пятницу</b>: 
                    <br className="d-sm-none"/> с 10:00 до 18:00
                    <br/> +7 (343) 382-23-48
                    <br /> <a href="mailto:opora-66@mail.ru">opora-66@mail.ru</a>
                </p>
            </section>
        )
    }
}
