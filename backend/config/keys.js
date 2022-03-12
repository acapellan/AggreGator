// devKeys are not committed to repo, test keys are loaded to allow automated tests
if (process.env.NODE_ENV === 'production') {
  const prodKeys = require('../config/prodKeys');

  console.log('Production mode detected');

  module.exports = prodKeys;
} else {
  try {
    const devKeys = require('../config/devKeys');

    console.log('Development mode detected');

    module.exports = devKeys;
  } catch (err) {
    const testKeys = require('../config/testKeys');

    console.log('Testing mode detected');

    module.exports = testKeys;
  }
}
