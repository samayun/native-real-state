export default authReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload }
        default:
            return state;
    }
};