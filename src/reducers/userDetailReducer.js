import {
	GET_USER,
	SET_LOADING,
	LOG_ERROR,
	CLEAR_USER_DATA,
	SEND_CONTACT_MESSAGE,
	CLEAR_MSG,
} from '../actions/types'
const initialState = {
	userDetails: null,
	loading: false,
	success: null,
	error: null,
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				userDetails: action.payload.data,
				loading: false,
				error: null,
				success: null,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
				error: null,
				success: null,
			}
		case LOG_ERROR:
			return {
				...state,
				userDetails: null,
				loading: false,
				error: action.payload,
				success: null,
			}
		case CLEAR_USER_DATA:
			return {
				...state,
				userDetails: null,
				loading: false,
				error: null,
				success: null,
			}
		case SEND_CONTACT_MESSAGE:
			return {
				...state,
				loading: false,
				error: null,
				success: action.payload.success,
			}
		case CLEAR_MSG:
			return {
				...state,
				loading: false,
				error: null,
				success: null,
			}
		default:
			return state
	}
}
