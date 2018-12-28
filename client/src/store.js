import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// first arg takes a 'reducer'; second arg is 'preloadedState', any initial state you want to add; third arg is 'enhancer', this is where react applies our middleware, the redux chrome extension, etc.
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // #deploymentVariableToChange
  )
);

export default store;
