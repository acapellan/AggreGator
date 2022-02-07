// source credit: https://github.com/expressjs/express/blob/master/examples/web-service/index.js

// Module dependencies
const express = require('express');
const app = express();
const port = 3000;

// map of valid api keys, typically mapped to account info with some sort of database like redis.
// api keys do _not_ serve as authentication, merely to track API usage or help prevent malicious behavior etc.
const apiKeys = ['foo', 'bar', 'baz'];

// Create an error with status--this property can be used in our
// custom error handler (Connect respects this property as well)
let error = (status, msg) => {
  let err = new Error(msg);
  err.status = status;
  return err;
};

// These next three objects (repos, users, and userRepos) serve as a faux database for now
const repos = [
  {name: 'express', url: 'https://github.com/expressjs/express'},
  {name: 'aggreGator', url: 'https://github.com/acapellan/AggreGator'},
  {name: 'bootstrap', url: 'https://github.com/twbs/bootstrap'},
  {name: 'you-dont-know-js', url: 'https://github.com/getify/You-Dont-Know-JS'},
  {name: 'linux', url: 'https://github.com/torvalds/linux'}
];

const users = [{name: 'Brian'}, {name: 'Alejandro'}, {name: 'Jacob'}, {name: 'Steven'}];

const userRepos = {
  Brian: [repos[0], repos[1]],
  Alejandro: [repos[1], repos[2]],
  Jacob: [repos[2], repos[3]],
  Steven: [repos[3], repos[4]]
};

// here we validate the API key, by mounting this middleware to /api
// meaning only paths prefixed with "/api" will cause this middleware to be invoked
app.use('/api', (req, res, next) => {
  const key = req.query['api-key'];

  // key isn't present
  if (!key) {
    return next(error(400, 'api key required'));
  }

  // key is invalid
  if (!apiKeys.includes(key)) {
    return next(error(401, 'invalid api key'));
  }

  // all good, store req.key for route access
  req.key = key;
  next();
});

// API key is valid, expose the data
app.get('/api/users', (req, res, next) => {
  // example: http://localhost:3000/api/users/?api-key=foo
  res.send(users);
});

app.get('/api/repos', (req, res, next) => {
  // example: http://localhost:3000/api/repos/?api-key=foo
  res.send(repos);
});

app.get('/api/user/:name/repos', (req, res, next) => {
  // example: http://localhost:3000/api/user/Alejandro/repos/?api-key=foo
  const name = req.params.name;
  const user = userRepos[name];

  if (user) {
    res.send(user);
  } else {
    next();
  }
});

// middleware with an arity of 4 are considered error handling middleware. When you next(err)
// it will be passed through the defined middleware in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use((err, req, res, next) => {
  // whatever you want here, feel free to populate properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({error: err.message});
});

// our custom JSON 404 middleware. Since it's placed last it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use((req, res) => {
  res.status(404);
  res.send({error: "Sorry, can't find that"});
});

app.listen(port, () => {
  console.log(`AggreGator API started on port ${port}`);
});

module.exports = app;