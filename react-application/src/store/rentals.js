import { rentalData } from './data';

const store = {
  rentals: () => {
    return rentalData;
  },
  data1: () => ['Happy', 'Coding', 'Babe!'],
  data2: () => [1, 2, 3]
}

export default store;
