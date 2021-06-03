import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import BookReducer from './book.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    book: BookReducer
})

export default rootReducer;