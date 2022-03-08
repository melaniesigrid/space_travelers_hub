import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions, { getMissions } from './missions';
import rockets, { getRocketsApi } from './rockets';

const reducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getMissions());
store.dispatch(getRocketsApi());

export default store;
