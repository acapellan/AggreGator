const mongoose = require('mongoose');
const { Schema } = mongoose; // same as `const Schema = mongoose.Schema;`
const UserSchema = require('./User');

const topicSchema = new Schema({
  author: { type: UserSchema, required: true },
  title: { type: String, required: true },
  datePosted: { type: Date, required: true },
  body: { type: String, required: true }
});

mongoose.model('topics', topicSchema);
