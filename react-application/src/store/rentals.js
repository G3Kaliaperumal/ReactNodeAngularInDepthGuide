import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

const addPromiseToDispatch = (store) => {
  const { dispatch } = store;

  return action => {
    if (action.then && typeof action.then === 'function') {
      return action.then(dispatch)
    }

    dispatch(action);
  }
}

export function initStore() {
  const reducers = combineReducers({
    rentals,
    rental,
    data1: () => ['Happy', 'Coding', 'Babe!'],
    data2: () => [1, 2, 3]
  });

  const reduxConstant = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxConstant);

  store.dispatch = addPromiseToDispatch(store);

  return store;
}
