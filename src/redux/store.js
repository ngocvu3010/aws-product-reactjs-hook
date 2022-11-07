import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import productsSaga from '../sagas';
import logger from "redux-logger";


const composeEnhancers = composeWithDevTools();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(...[sagaMiddleware, logger]));

sagaMiddleware.run(productsSaga);

export default store;
