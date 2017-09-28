import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import dashboard from './reducers/dashboard';

const prod = process.env.NODE_ENV === 'production';

let store,
  middleware;

if (!prod) {
  middleware = composeWithDevTools(applyMiddleware(thunk, createLogger({collapsed: true})));
} else {
  middleware = applyMiddleware(thunk);
}

const reducer = combineReducers({
  dashboard
});

store = createStore(reducer, middleware);

export default store;