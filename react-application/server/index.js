const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(bodyParser.json())

app.get('/api/v1/rentals', (req, res) => {
  return res.json(rentals);
});

app.get('/api/v1/rentals/:rentalId', (req, res) => {
  const rentalId = req.params.rentalId;
  const rental = rentals.find(r => r._id === rentalId)

  return res.json(rental);
});

app.post('/api/v1/rentals', (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({
    message: `Rental data: ${rentalData._id} added successfully!`,
    rentals: rentals
  });
});

app.delete('/api/v1/rentals/:rentalId', (req, res) => {
  const { rentalId } = req.params;
  const rentalIndex = rentals.findIndex(r => r._id === rentalId);
  rentals.splice(rentalIndex, 1);

  return res.json({
    message: `Rental data: ${rentalId} removed successfully!`,
    rentals: rentals
  });

  return res.json(rental);
});

app.patch('/api/v1/rentals/:rentalId', (req, res) => {
  const { rentalId } = req.params;
  const rentalDataToBeUpdated = req.body;
  const rentalIndex = rentals.findIndex(r => r._id === rentalId);
  rentals.splice(rentalIndex, 1, rentalDataToBeUpdated);

  return res.json({
    message: `Rental data: ${rentalId} updated successfully!`,
    rentals: rentals
  });

  return res.json(rental);
});

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
