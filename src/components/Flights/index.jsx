import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Ticket from '../Ticket';
import { CSSTransitionGroup } from 'react-transition-group'

class Flights extends Component {
	static propTypes = {
		tickets: PropTypes.array.isRequired,
		stops: PropTypes.array.isRequired
	};

	getBody() {
		const {stops, tickets, selectedSort} = this.props
		//сортируем билеты (по умолчанию по цене)
		var ticketListSorted
		if (selectedSort === "By price") {
			ticketListSorted = tickets.sort(
				(a, b) => {
					if (a.price > b.price) return 1;
					if (a.price < b.price) return -1;
				}
			)
		} if (selectedSort === "By stops count") {
			ticketListSorted = tickets.sort(
				(a, b) => {
					if (a.stops > b.stops) return 1;
					if (a.stops < b.stops) return -1;
				}
			)
		}

	
		// Заводим переменную с отфильтрованными билетами, если галочки не стоят нигде, то отрисовываем весь список. 
		// Проверяем массив с выбранным кол-вом пересадок из MainContent. Возвращаем новый массив с совпадающими значениями.
		if (stops.length !== 0) {
			var filteredTickets = ticketListSorted.filter(item => 
				this.props.stops.includes(item.stops)
			)
		} else {
			filteredTickets = ticketListSorted
		}

		// Подготавливаем к рендеру, отрисовываем в виде списка с li элементами
		const ticketElements = filteredTickets.map(ticket =>
			//У билетов нет уникального номера, поэтому key пропускаем тут...пока не решил как поступить. Обычно id всегда есть, можно использовать из базы.
			<li>
				<Ticket 
					ticket = {ticket}
				/>
			</li>
		)
			return ticketElements
		}


	render() {
		return (
					<CSSTransitionGroup
						transitionName = "flightsList"
						transitionAppear
						transitionEnter
						transitionEnterTimeout = {500}
						transitionLeaveTimeout = {300}
						transitionAppearTimeout = {1000}
						component = {Fragment}
						>
						<div key={this.props.stops}>
							{this.getBody()}
						</div>			
					</CSSTransitionGroup>
		);
	}
}

export default Flights;
