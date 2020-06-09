import { rentalData } from './data';
import { createStore, combineReducers} from 'redux';

export function initStore() {
  const reducers = combineReducers({
    rentals: () => {
      return rentalData;
    },
    data1: () => ['Happy', 'Coding', 'Babe!'],
    data2: () => [1, 2, 3]
  });

  return createStore(reducers);
}
