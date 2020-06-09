import { rentalData } from './data';
import { createStore, combineReducers} from 'redux';

export function initStore() {
  const reducers = combineReducers({
    rentals: (state = [], action) => {
      if (action === 'FETCH_RENTALS')
        return rentalData;
      else
        return state;
    },
    data1: (state = [], action) => {
      if (action === 'FETCH_DATA1')
        return ['Happy', 'Coding', 'Babe!'];
      else
        return state;
    },
    data2: (state = [], action) => {
      if (action === 'FETCH_DATA2')
        return [1, 2, 3];
      else
        return state;
    }
  });

  return createStore(reducers);
}
