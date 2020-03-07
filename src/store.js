import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./services/rootReducer";

const logger = createLogger({
    // ...options
});

//setting up store with middleware and redux dev tools viewers
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        ReduxPromise,
    ),
    applyMiddleware(
        thunk,
    ),
    applyMiddleware(
        logger
    ),
    // other store enhancers if any
));

export default store;