import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

	// getHomePage() {
	// 	store.dispatch(push('/'))
	// }

	// getTicketsPage() {
	// 	store.dispatch(push('/tickets'))
	// }

	// getAboutPage() {
	// 	store.dispatch(push('/about'))
	// }

	render() {
		return (
			<div>
				<ul>
					<li><NavLink to='/'> Стартовая</NavLink></li>
					<li><NavLink to='/tickets'> Билеты</NavLink></li>
					<li><NavLink to='/about'> О компании</NavLink></li>
      </ul>
			</div>
		);
	}
}

export default Header;