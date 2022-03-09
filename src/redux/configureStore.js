import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './missions';
import rockets, { getRocketsApi } from './rockets';

const reducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getRocketsApi());

export default store;
