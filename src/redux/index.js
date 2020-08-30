import {combineReducers} from "redux";

import reducer from "./reducer";
import {authReducer} from "./auth/authRecuder";

export default combineReducers({
    testRducer: reducer,
    auth: authReducer,
});
