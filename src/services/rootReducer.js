import { combineReducers } from "redux";
import ApplicationReducer from "../scenes/Application/services/reducer";

const appReducer = combineReducers({
    ApplicationReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
