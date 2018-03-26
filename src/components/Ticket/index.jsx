import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Ticket extends Component {
	static propTypes = {
		ticket: PropTypes.object.isRequired
	};

	render() {
		const {ticket} = this.props
		return (
			<div className="ticket">
				<div className="ticket-info">
					<div className="ticket-info__logo"></div>
					<div className="ticket-info__price">
						<a href="">
							<button className="ticket-info__buy">Купить за <br/><span className="ticket-info__price-inrub">{ticket.price} Р</span>
							</button>
						</a>
					</div>
				</div>
				<div className="ticket-details">
					<div className="ticket-details-departure">
						<div className="ticket-details-departure__time">{ticket.departure_time}</div>
						<div className="ticket-details-departure__origin-name">{ticket.origin}, {ticket.origin_name}</div>
						<div className="ticket-details-departure__date">{ticket.departure_date}</div>
					</div>
					<div className="ticket-details__stops"><p><i className="fas fa-plane fa-3x"></i></p> {ticket.stops !== 0 ? <span>{ticket.stops} пересадка(и)</span> : <span>Без пересадок</span>}
					</div>
					<div className="ticket-details-arrival">
						<div className="ticket-details-arrival__time">{ticket.arrival_time}</div>
						<div className="ticket-details-arrival__destination-name">{ticket.destination_name}, {ticket.destination}</div>
						<div className="ticket-details-arrival__date">{ticket.arrival_date}</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Ticket;
