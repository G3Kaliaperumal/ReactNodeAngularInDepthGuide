const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/rentals')

const app = express();
const PORT = process.env.PORT || 3001;

// Replace <password> with the actual password
mongoose.connect('mongodb+srv://GayathriK:<password>@cluster0-swbtm.mongodb.net/bookhotel?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Success');
});

app.use(bodyParser.json())
app.use('/api/v1/rentals', router);

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
