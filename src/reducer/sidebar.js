import {GET_MAX_STOPS} from '../constants'

const initialState = {
	maxStops: []
};

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
			case GET_MAX_STOPS:
				return {...state, maxStops: payload}
			default:
				return state
	}
}