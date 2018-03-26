import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Filter extends Component {
	static propTypes = {
		maxStops: PropTypes.array.isRequired,
		stops: PropTypes.array.isRequired,
		handleChange: PropTypes.func
	};

	//Отрисовка чекбоксов с фильтрацией по кол-ву пересадок
	render() {
		const {handleChange} = this.props
		return (
			<div className="stops-filter">
				{this.props.maxStops.map(stop => {
					return (
						<div className="stops-filter__item" key={stop}>
								<input
									type="checkbox"
									name={stop}
									value={stop}
									onChange = {handleChange}
									id = {stop}
								/> 
								<label htmlFor={stop} className="checkbox"><span></span>{stop} пересадка(и)	</label>
											
						</div>
					)
				})}
			</div>
		);
	}
}

export default Filter;
