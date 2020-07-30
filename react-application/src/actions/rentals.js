import axios from 'axios';

export const fetchRentals = () => {
  axios.get('http://localhost:3000/api/v1/rentals')
    .then(res => {
      const rentals = res.body;
      return rentals;
    });

  return {
    type: 'FETCH_RENTALS',
    rentals: []
  }
}

export const fetchRentalById = (rentalId) => {
  return {
    type: 'FETCH_RENTAL_BY_ID',
    rental: []
  }
}

export const createRental = (rental) => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}
