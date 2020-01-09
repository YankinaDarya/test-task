import {applyMiddleware, createStore, compose} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

/*let store = createStore(reducer);*/

export default store;