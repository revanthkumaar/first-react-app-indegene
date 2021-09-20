import {applyMiddleware, createStore} from "redux";
import rotateReducer from "./reducers/rotateReducer"
import logger from 'redux-logger';

function configureStore(state = { rotate: false}) {
  return createStore(rotateReducer, state, applyMiddleware(logger));
}

export default configureStore;