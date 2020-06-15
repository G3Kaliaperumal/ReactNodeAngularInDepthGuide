import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
  const reducers = combineReducers({
    rentals,
    rental,
    data1: () => ['Happy', 'Coding', 'Babe!'],
    data2: () => [1, 2, 3]
  });

  const reduxConstant = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  return createStore(reducers, reduxConstant);
}
