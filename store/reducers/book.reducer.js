import Types from '../constants'

const INITIAL_STATE = {
    books: [],
    book: null,
    error: null
}
const BookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CREATE_BOOK:
            // let newSite = {}
            // newSite['id'] = state.books.length;
            // newSite = { ...action.payload }
            const updatedState = [action.payload, ...state.books]
            return {
                ...state,
                books: updatedState
            };
        case Types.DELETE_BOOK:
            const deletedData = state.books.filter(site => site.id !== action.id);
            return {
                books: deletedData
            };
        case Types.FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        case Types.FETCH_SINGLE_BOOK:
            return {
                ...state,
                book: action.payload
            };

        case Types.BOOK_ERROR:
            const error = action.error?.message || action.error;
            return { ...state, error };

        default:
            return state;
    }
}

export default BookReducer;