// devKeys are not committed to repo
// test keys are loaded to allow automated tests
// production mode must also include a number of defined environment variables
if (process.env.NODE_ENV === 'production') {
  console.log('Production mode detected');
  module.exports = require('./prodKeys');
} else {
  try {
    console.log('Development/Standalone/Local testing mode detected');
    module.exports = require('./devKeys');
  } catch (err) {
    console.log('Remote testing mode detected');
    module.exports = require('./testKeys');
  }
}
