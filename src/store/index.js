import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { weatherWatcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export let store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(weatherWatcherSaga);
