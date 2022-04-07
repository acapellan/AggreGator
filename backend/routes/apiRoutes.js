const mongoose = require('mongoose');
const User = mongoose.model('users');
const Topic = mongoose.model('topics');

const apiRoutes = app => {
  // map of valid api keys, typically mapped to account info with some sort of database like redis.
  // api keys do _not_ serve as authentication, merely to track API usage or help prevent malicious
  // behavior etc.
  const apiKeys = ['frontend_application', 'test_application'];

  // Create an error with status--this property can be used in our custom error handler (Connect
  // respects this property as well)
  let error = (status, msg) => {
    let err = new Error(msg);
    err.status = status;
    return err;
  };

  // These next three objects (repos, users, and userRepos) serve as a faux database for now
  const topics = [
    {
      key: 0,
      author: 'Brian',
      title: 'Best resourses for studying',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      key: 1,
      author: 'Brian',
      title: 'LinkedIn courses of interest',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      key: 2,
      author: 'Alejandro',
      title: 'Which class to take next',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      key: 3,
      author: 'Alejandro',
      title: 'YouTube links',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      key: 4,
      author: 'Jacob',
      title: 'Internship opportunities',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      key: 5,
      author: 'Steven',
      title: 'Study partners',
      datePosted: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  const users = [
    { name: 'Brian', role: 'Student' },
    { name: 'Alejandro', role: 'Student' },
    { name: 'Jacob', role: 'Student' },
    { name: 'Steven', role: 'Student' }
  ];

  const userTopics = {
    Brian: [topics[0], topics[1]],
    Alejandro: [topics[2], topics[3]],
    Jacob: [topics[4]],
    Steven: [topics[5]]
  };

  // here we validate the API key, by mounting this middleware to /api meaning only paths prefixed
  // with "/api" will cause this middleware to be invoked
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

  // return all users
  app.get('/api/users', (req, res, next) => {
    // example: http://localhost:5000/api/users?api-key=frontend_application
    res.send(users);
  });

  // return all topics
  app.get('/api/topics', async (req, res, next) => {
    // example: http://localhost:5000/api/topics?api-key=frontend_application
    const topics = await Topic.find({});

    res.send(topics);
  });

  // create a new topic
  app.post('/api/topics', async (req, res, next) => {
    // example: http://localhost:5000/api/topics?api-key=frontend_application

    let user = req.user;

    if (!req.user) {
      user = await User.findOne({ googleID: 'anonymous' });
    }

    const topic = new Topic({
      author: user,
      title: req.body.title,
      datePosted: new Date(),
      body: req.body.body
    });

    await Topic.create(topic, err => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: 'topic successfully added', topic });
      }
    });
  });

  // delete all topics
  app['delete']('/api/topics', async (req, res, next) => {
    const result = await Topic.deleteMany({});
    res.send(result);
  });

  // return one topic by key value
  app.get('/api/topics/:id', async (req, res, next) => {
    // example: http://localhost:5000/api/topics/1?api-key=frontend_application
    const id = req.params.id;
    const topic = await Topic.findById(id);

    res.send(topic);
  });

  // return all topics by one author
  app.get('/api/user/:author/topics', (req, res, next) => {
    // example: http://localhost:5000/api/user/Alejandro/topics?api-key=frontend_application
    const author = req.params.author;
    const user = userTopics[author];

    if (user) {
      res.send(user);
    } else {
      next();
    }
  });

  // middleware with an arity of 4 are considered error handling middleware. When you next(err) it
  // will be passed through the defined middleware in order, but ONLY those with an arity of 4,
  // ignoring regular middleware.
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: err.message });
  });
};

module.exports = apiRoutes;
