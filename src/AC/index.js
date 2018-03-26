import {GET_MAX_STOPS} from '../constants'

export function getMaxStops(allStopsList) {
	return {
			type: GET_MAX_STOPS,
			payload: allStopsList
	}
}