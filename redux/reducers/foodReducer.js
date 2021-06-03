export default foodReducer = (foods = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...foods, ...action.payload]
        default:
            return state;
    }
};