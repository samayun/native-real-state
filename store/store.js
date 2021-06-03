import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Side Effect async
import thunk from "redux-thunk";
// Logger
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from "redux-logger";
const logger = createLogger();

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
    middlewares.push(composeWithDevTools);
}

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export default store;
