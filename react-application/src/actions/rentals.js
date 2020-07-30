import axios from 'axios';

export const fetchRentals = () => dispatch => {
  axios
    .get('/api/v1/rentals')
    .then(res => {
      const rentals = res.data;

      dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    });
}

export const fetchRentalById = rentalId => dispatch => {
  axios
    .get(`/api/v1/rentals/${rentalId}`)
    .then(res => {
      const rental = res.data;

      dispatch({
        type: 'FETCH_RENTAL_BY_ID',
        rental
      });
    });
}

export const createRental = (rental) => dispatch => {
  axios
    .post('/api/v1/rentals', rental)
    .then(res => {
      const rental = res.data;

      dispatch({
        type: 'CREATE_RENTAL',
        rental
      });
    });
}
