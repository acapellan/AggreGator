// devKeys are not committed to repo
const devKeys = require('./devKeys');
const prodKeys = require('./prodKeys');
// test keys are loaded to allow automated tests
const testKeys = require('./testKeys');

// production mode must also include a number of defined environment variables
if (process.env.NODE_ENV === 'production') {
  console.log('Production mode detected');
  module.exports = prodKeys;
} else {
  try {
    console.log('Development/Standalone/Local testing mode detected');
    module.exports = devKeys;
  } catch (err) {
    console.log('Remote testing mode detected');
    module.exports = testKeys;
  }
}
