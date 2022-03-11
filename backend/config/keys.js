// devKeys are not committed to repo, test keys are loaded to allow automated tests
if (process.env.NODE_ENV === 'production') {
  module.exports = require('../config/prodKeys');
} else {
  try {
    module.exports = require('../config/devKeys');
  } catch (err) {
    module.exports = require('../config/testKeys');
  }
}
