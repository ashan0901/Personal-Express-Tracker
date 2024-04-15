import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {};
const middleWare = [thunk];

const composeEnhancers =
  (typeof window !== "undefined" &&
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
  compose;

let store;

store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;