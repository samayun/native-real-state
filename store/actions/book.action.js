import BOOKDataService from '../../services/book.service';

import Types from '../constants'

export const resetState = () => ({ type: Types.RESET });

export const BOOKSuccess = payload => ({
    type: Types.FETCH_BOOKS, payload, error: null
})
export const BOOKCreate = payload => ({
    type: Types.CREATE_BOOK, payload, error: null
})
export const BOOKError = error => ({
    type: Types.BOOK_ERROR, error
})

export const fetchSingleBOOK = payload => ({
    type: Types.FETCH_SINGLE_BOOK, payload
})

export const toggleCreateBOOKModal = () => ({ type: Types.TOGGLE_MODAL });

export const createBOOKAction = credentials => {
    return async dispatch => {
        try {
            resetState();
            const response = await BOOKDataService.createBOOK(credentials);
            console.log("BOOK", response.BOOK);
            // dispatch({
            //     type: Types.ADD_BOOK_TO_USER,
            //     payload: response.BOOK
            // })
            dispatch(BOOKCreate(response.BOOK));
            dispatch(toggleCreateBOOKModal())
        } catch (error) {
            dispatch(BOOKError(error.message))
        }
    }
}

export const readAllBOOKAction = () => {
    return async dispatch => {
        try {
            resetState();
            const response = await BOOKDataService.readAllBOOK();
            console.log("response", response);
            console.log("books", response.books);
            dispatch(BOOKSuccess(response.books))
        } catch (error) {
            dispatch(BOOKError(error.message))
        }
    }
}

export const getSingleBOOKAction = BOOKId => {
    return async dispatch => {
        try {
            resetState();
            const response = await BOOKDataService.getSingleBOOK(BOOKId);
            console.log("fetchSingleBOOK", response.BOOK);
            dispatch(fetchSingleBOOK(response.BOOK))
        } catch (error) {
            dispatch(BOOKError(error.message))
        }
    }
}
export const updateBOOKAction = (BOOKId, credentials) => {
    return async dispatch => {
        try {
            resetState();
            const response = await BOOKDataService.BOOKSignup(credentials);
            console.log("user", response);
            sessionStorage.setItem("token", response.access_token)
            dispatch(BOOKSuccess(response.user))
        } catch (error) {
            dispatch(BOOKError(error.message))
        }
    }
}


export const deleteBOOKAction = () => {
    return async (dispatch, getState) => {
        try {
            resetState();
            const response = await BOOKDataService.getLogout();
            console.log(response.message);
            dispatch({ type: Types.DELETE_BOOK });
        } catch (error) {
            dispatch(BOOKError(error.message))
        }
    }
}