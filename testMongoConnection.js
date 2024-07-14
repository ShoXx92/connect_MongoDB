const mongoose = require('mongoose');

mongoose.connect('').then(() => {
  console.log('Connected to MongoDB!');
  process.exit(0); // Exits the process successfully
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Exits the process with an error
});
