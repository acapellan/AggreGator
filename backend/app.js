// Module dependencies
const express = require('express');
require('./services/passport.js'); // nothing is returned

const app = express();

// add routes to the application
require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`AggreGator application started`);
});

module.exports = app;
