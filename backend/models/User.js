const mongoose = require('mongoose');
const { Schema } = mongoose; // same as `const Schema = mongoose.Schema;`

const userSchema = new Schema({
  googleID: String,
  name: {
    first: String,
    last: String
  },
  email: String
});

mongoose.model('users', userSchema);
