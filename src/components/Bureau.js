import React, { Component } from 'react'
import bureauLeaderPic from '../res/Shelokov.jpg'

export default class Bureau extends Component {
	componentDidMount() {
		window.scrollTo(0,0)
	}
	render() {
		return (
      <div>
        <div className="container">
          <button
            className="post-single-back"
            onClick={() => this.props.history.goBack()}
          >
            ← Назад
          </button>
		  <h1>О бюро</h1>
          <div className="row">
            <div className="col-lg-8">
              <p>
                Бюро создано в целях оказания квалифицированной юридической
                помощи на профессиональной основе юридическим и физическим лицам
                - предпринимателям для защиты их прав, свобод и интересов от
                неправомерных действий органов государственной власти и местного
                самоуправления, проведения независимой общественной экспертизы
                законопроектов, управленческих решений по вопросам
                предпринимательства, научно-технической, налоговой,
                финансово-кредитной политики.
                <br />
                <br /> Основные направления работы Бюро:
                <br />
                <br /> 1) Работа над обращениями предпринимателей, анализ
                проблемной ситуации и подготовка экспертных заключений и
                рекомендаций.
                <br />
                <br /> 2) Проведение дней бесплатной юридической помощи.
                <br />
                <br /> 3) Проведение семинаров по юридическим аспектам
                организации и ведения бизнеса
                <br />
                <br /> 4) Организация круглых столов по обсуждению актуальных
                правовых вопросов.
              </p>
              {/* <div className="row justify-content-center">
						<a href="http://www.lev-group.ru/russia/about/"
							target="blank"
							className="button button-light">Подробнее</a>
					</div> */}
            </div>
            <div className="col-lg-4">
				<h2 className="bureau-leader">Руководитель бюро</h2>
				<img src={bureauLeaderPic} alt="" className="bureau-leader-image" />
				<p>Щелоков Алексей Николаевич
				<br />Контакты: 
				<br />E-mail: 2904492@mail.ru 
				</p>
			</div>
          </div>
        </div>
      </div>
    );
	}
}
