import {applyMiddleware, createStore} from "redux";
import rotateReducer from "./reducers/rotateReducer"
import logger from 'redux-logger';
const state = { rotate: true, loading: false };

function configureStore(state) {
  return createStore(rotateReducer, state, applyMiddleware(logger));
}

export default configureStore;