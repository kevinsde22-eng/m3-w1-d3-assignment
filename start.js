require('dotenv').config();
const mongoose = require('mongoose');

// Note: the slides pass { useNewUrlParser: true, useUnifiedTopology: true } here.
// Those options were removed in newer versions of the MongoDB driver (Mongoose 6+
// always behaves this way), and Mongoose 9 throws "options ... are not supported"
// if you pass them, so they are left out.
mongoose.connect(process.env.DATABASE);

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require('./models/Registration');
const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
