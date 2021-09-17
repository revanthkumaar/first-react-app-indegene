import {createStore} from "redux";
import rotateReducer from "./reducers/rotateReducer"

const state = { rotate: true, loading: false };

function configureStore(state) {
  return createStore(rotateReducer, state);
}

export default configureStore;