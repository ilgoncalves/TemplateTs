import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(rootSaga);

export default store;
