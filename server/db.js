const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
mongoose.connection.on('open', () => {
  console.log('Sucessfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB Connection Error', err);
});