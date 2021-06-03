import types from "../constants";

const initialState = {
    authError: null,
    user: null,
    error: null,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESET":
            return {
                ...state, authError: null,
                user: null,
                error: null
            }
        case "AUTH_ERROR":
            return { ...state, error: action.error, authError: action.error }
        case "AUTH_USER":
            console.log('LOGIN SUCCESS', action);
            return { ...state, user: action.payload }
        case "AUTH_LOGOUT":
            console.log('AUTH_LOGOUT SUCCESS');
            return { ...state, user: action.user }
        case types.ADD_BOOK_TO_USER:
            console.log(action);
            return {
                ...state,
                user: {
                    ...state.user,
                    books: [...action.payload, ...state.user.books]
                }
            };
        default:
            return state;
    }
}

export default authReducer;