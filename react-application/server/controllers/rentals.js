const rentals = [
  {
    _id: '1',
    city: 'New York',
    title: 'The Golden Villa'
  }, {
    _id: '2',
    city: 'New Hamphshire',
    title: 'The Backingham Palace'
  }
]

exports.getRentals = (req, res) => {
  return res.json(rentals);
}

exports.getRentalById = (req, res) => {
  const rentalId = req.params.rentalId;
  const rental = rentals.find(r => r._id === rentalId)

  return res.json(rental);
}

exports.createRental = (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({
    message: `Rental data: ${rentalData._id} added successfully!`,
    rentals: rentals
  });
}

exports.updateRental = (req, res) => {
  const { rentalId } = req.params;
  const rentalDataToBeUpdated = req.body;
  const rentalIndex = rentals.findIndex(r => r._id === rentalId);
  rentals.splice(rentalIndex, 1, rentalDataToBeUpdated);

  return res.json({
    message: `Rental data: ${rentalId} updated successfully!`,
    rentals: rentals
  });
}

exports.deleteRental = (req, res) => {
  const { rentalId } = req.params;
  const rentalIndex = rentals.findIndex(r => r._id === rentalId);
  rentals.splice(rentalIndex, 1);

  return res.json({
    message: `Rental data: ${rentalId} removed successfully!`,
    rentals: rentals
  });
}
