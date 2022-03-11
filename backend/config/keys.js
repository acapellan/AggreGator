// devKeys are not committed to repo, test keys are loaded to allow automated tests
if (process.env.NODE_ENV === 'production') {
  console.log('Production mode detected');
  module.exports = require('../config/prodKeys');
} else {
  try {
    console.log('Development mode detected');
    module.exports = require('../config/devKeys');
  } catch (err) {
    console.log('Testing mode detected');
    module.exports = require('../config/testKeys');
  }
}
