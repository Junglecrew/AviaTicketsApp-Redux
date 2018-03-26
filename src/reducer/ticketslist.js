import {LOAD_TICKETS_FROM_API_SUCCESS} from '../constants'

const initialState = {
	tickets: null,
	isLoading: true
};

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
			case LOAD_TICKETS_FROM_API_SUCCESS:
				return {...state, isLoading: payload.isLoading, tickets: payload.data.tickets}
			default:
				return state
	}
}