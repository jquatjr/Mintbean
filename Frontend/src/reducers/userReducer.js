import { GET_USER, LOGOUT } from '../actions/types';

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case GET_USER:
			return { ...state, user: action.username };
		case LOGOUT:
			return { ...state, user: null };
		default:
			return state;
	}
}
