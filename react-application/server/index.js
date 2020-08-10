const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

// Routes
const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

// Models
require('./models/rentals');
require('./models/user');

// Middleware
const { onlyAuthUser } = require('./controllers/users')

const app = express();
const PORT = process.env.PORT || 3001;

// Replace <password> with the actual password
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Success');
});

// Middleware
app.use(bodyParser.json());
app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
  return res.json({ message: `Secret! ${res.locals.user.username}` });
});

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
