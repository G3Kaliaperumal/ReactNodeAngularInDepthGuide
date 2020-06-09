import { createStore, combineReducers} from 'redux';
import rentals from './reducers/rentals';

export function initStore() {
  const reducers = combineReducers({
    rentals,
    data1: () => ['Happy', 'Coding', 'Babe!'],
    data2: () => [1, 2, 3]
  });

  return createStore(reducers);
}
