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
  })
})

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
