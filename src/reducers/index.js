import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userDetailReducer from './userDetailReducer'
import authReducer from './authReducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['userDetail', 'authReducer'],
}
const rootReducer = combineReducers({
	userDetail: userDetailReducer,
	authReducer: authReducer,
})
const appReducer = (state, action) => {
	if (action.type === 'CLEAR_AUTH_DATA') {
		state = undefined
	}
	return rootReducer(state, action)
}
export default persistReducer(persistConfig, appReducer)
// export default persistReducer(persistConfig, rootReducer)
