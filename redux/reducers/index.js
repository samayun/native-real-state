import { combineReducers } from 'redux'

import foodReducer from './foodReducer'
import authReducer from './authReducer'

export default combineReducers({ foodReducer, authReducer })