import { ADD_COLORING_TO_STATE, GET_COLORING, POST_COLORING } from '../actions/types';

export default function coloringReducer(state = {}, action) {
	switch (action.type) {
		case GET_COLORING:
			return { ...state, colorings: action.colorings };
		case POST_COLORING:
			return { ...state, colorings: action.colorings };
        case ADD_COLORING_TO_STATE:
           
            return {...state, [action.name]:action.coloring}
		default:
			return state;
	}
}
