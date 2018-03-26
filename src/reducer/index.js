import { combineReducers } from 'redux'
import ticketslist from './ticketslist'
import sidebar from './sidebar'

export default combineReducers({
	ticketslist,
	sidebar
})

