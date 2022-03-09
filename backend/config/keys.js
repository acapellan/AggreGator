// keys are not committed to repo, fake keys are loaded to allow automated tests
let keys;

try {
  keys = require('../config/realKeys');
} catch (err) {
  keys = require('../config/fakeKeys');
}

module.exports = keys;
