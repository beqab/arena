import {applyMiddleware, createStore, compose} from "redux";

import logger from "redux-logger";

import rootreducer from "./redux/index";

const middlewares = [logger];

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? compose(
              applyMiddleware(...middlewares),
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
          )
        : compose(applyMiddleware(...middlewares));

const store = createStore(rootreducer, {}, composeEnhancers);

export default store;
