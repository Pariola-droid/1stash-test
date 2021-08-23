import {
	GET_USER,
	SET_LOADING,
	LOG_ERROR,
	CLEAR_USER_DATA,
	AUTH_LOG_ERROR,
	CLEAR_MSG,
} from './types'
import axios from 'axios'
import { remote } from '../config'

export const getUserDetail = (username) => async (dispatch) => {
	const options = {
		headers: {
			'Content-type': 'application/json',
		},
	}

	dispatch({
		type: CLEAR_MSG,
	})

	try {
		const res = await axios.get(`${remote.userProfile}${username}`, options)

		if (res.data.status === 'error') {
			dispatch({
				type: LOG_ERROR,
				payload: res.data.message,
			})
		} else {
			dispatch({
				type: GET_USER,
				payload: res.data,
			})
		}
	} catch (error) {
		// alert()
		dispatch({
			type: LOG_ERROR,
			payload: 'network_error',
		})
	}
}
//
export const postRequestWithoutToken =
	(url, actionType, postData, reset) => async (dispatch) => {
		const options = {
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
			},
		}
		//
		dispatch({
			type: SET_LOADING,
		})
		try {
			const res = await axios.post(`${url}`, postData, options)
			if (res.status === 200) {
				reset && reset()
				dispatch({
					type: actionType,
					payload: res.data,
				})
			}
		} catch (error) {
			dispatch({
				type: AUTH_LOG_ERROR,
				payload:
					error.response === undefined
						? 'Network Error'
						: error.response.data.errors === undefined
						? error.response.data.message
						: error.response.data.errors,
			})
		}
	}
export const clearUserData = () => {
	return {
		type: CLEAR_USER_DATA,
	}
}

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	}
}

export const clearMsg = () => {
	return {
		type: CLEAR_MSG,
	}
}
