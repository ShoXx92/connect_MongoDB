const mongoose = require('mongoose');

mongoose.connect('mongodb://shoxonbot:shoxonbot2024@194.107.126.5:27017/synetix_development_shoxon').then(() => {
  console.log('Connected to MongoDB!');
  process.exit(0); // Exits the process successfully
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Exits the process with an error
});
