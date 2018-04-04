import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter'
import Flights from '../components/Flights'
import SortList from '../components/Sort/';
import PropTypes from 'prop-types'
import {getMaxStops} from '../AC'

class MainContent extends Component {
	static propTypes = {
		tickets: PropTypes.array.isRequired,
	}

	constructor(props) {
    super(props);
		this.state = {
			stops: [], //Можно перенести в store
			selectedSort: 'By price' //Можно перенести в store
		};
	}

	//Определяем максимальное количество пересадок и записываем в state для автоматического рендеринга нужного количества чекбоксов
	componentDidMount() {
		const {tickets, getMaxStops} = this.props
		const allStopsList = tickets.map(item => item.stops).filter((item, index, arr) => {return arr.indexOf(item) === index}).sort((a, b) => 
		{
			if (a > b) return 1;
			if (a < b) return -1;
		})
		getMaxStops(allStopsList)
	}
	
	//Клики по чекбоксу + логика. Проверяем нажата ли галочка выбора. Создаем новый массив с выбранным кол-вом пересадок.
	//Этот массив новый будет использоваться для отрисовки списка билетов в компоненте Flights
	handleCheckboxClick = (e) => {
		const {stops} = this.state
		const checkedStop = +(e.target.value)
		if (stops.includes(checkedStop)) {
			this.setState({
				stops: stops.filter(item => {
					return item !== checkedStop
				})
			})
		} else {
				this.setState({
					stops: stops.concat([checkedStop])
				})
		}
	}

	handleSortChange = (e) => {
		this.setState({selectedSort: e.target.value});
	}

	render() {
		const {tickets} = this.props
		return (
			<div>
				<h1 className="main-title">Выберите подходящий билет</h1>
				<i className="fas fa-ticket-alt fa-5x"></i>
				<div className="container">
					<div className="sidebar">
						<SortList 
							selectedSort = {this.state.selectedSort}
							handleSortChange = {this.handleSortChange}
							/>
						<Filter 
							stops={this.state.stops} 
							maxStops={this.props.maxStops}
							handleChange = {this.handleCheckboxClick}/>
						</div>
					<div className="flights-list">
						<Flights 
							tickets={tickets} 
							stops={this.state.stops}
							selectedSort = {this.state.selectedSort}
							/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	maxStops: state.sidebar.maxStops
})

export default connect(mapStateToProps, {getMaxStops})(MainContent);
