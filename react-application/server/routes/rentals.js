const express = require('express');
const router = express.Router();
const {
  getRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental
} = require('../controllers/rentals')

router.get('', getRentals);
router.get('/:rentalId', getRentalById);
router.post('', createRental);
router.patch('/:rentalId', updateRental);
router.delete('/:rentalId', deleteRental);

module.exports = router;
