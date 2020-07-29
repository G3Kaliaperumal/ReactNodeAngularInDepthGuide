const Rental = require('../models/rentals');

exports.getRentals = (req, res) => {
  Rental.find({}, (error, foundRentals) => {
    if (error)
      return res.status(422).send({ errors: [{ title: 'Rental Error!', message: 'Cannot retrieve rental data' }] });

    return res.json(foundRentals);
  })
}

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;

  Rental.findById(rentalId, (error, foundRental) => {
    if (error)
      return res.status(422).send({ errors: [{ title: 'Rental Error!', message: 'Something went wrong!' }] });

    return res.json(foundRental);
  });
}

exports.createRental = (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({
    message: `Rental data: ${rentalData._id} added successfully!`,
    rentals: rentals
  });
}
