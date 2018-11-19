import React, { Component } from 'react'

export default class Adress extends Component {
    render() {
        return (
            <section id="adress" className="section-light">
                <h1 className="adress-city">Екатеринбург</h1>
                <p className="adress-description">
                    Юридический адрес:  620075, г. Екатеринбург, пр-т. Ленина, д.54, корп.4, кв. 171-172
                    <br/> Фактический адрес: 620014, г. Екатеринбург, ул. Юмашева, д.11
                    <br /> С понедельника по пятницу: с 10:00 до 18:00
                    <br/> +7 (343) 382-23-48
                    <br /> <a href="mailto:opora-66@mail.ru">opora-66@mail.ru</a>
                </p>
            </section>
        )
    }
}
