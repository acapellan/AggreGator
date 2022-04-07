// https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai

// During testing, the env variable is set to test
process.env.NODE_ENV = 'test';

// Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Topic = mongoose.model('topics');

// connect to database, create anonymous user account if it does not exist
mongoose.connect(keys.mongoURI, async err => {
  if (err) {
    console.log(err);
  } else {
    const User = mongoose.model('users');

    // search database for the anonymous user account
    const anonymousUser = await User.findOne({ googleID: 'anonymous' });

    if (!anonymousUser) {
      const user = await new User({
        googleID: 'anonymous',
        name: { first: 'Anonymous', last: 'User' }
      });
      user.save();
    }
  }
});

chai.use(chaiHttp);

// Database enabled tests
describe('Topics', async () => {
  describe('/GET topics', () => {
    it('it should DELETE all the topics', async () => {
      await Topic.deleteMany({});
    });

    it('it should GET all the topics', async () => {
      const res = await chai.request(app).get('/api/topics?api-key=test_application');

      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(0);
    }).timeout(20000);
  });

  describe('/POST topics', () => {
    it('it should not POST a topic without title field', async () => {
      const topic = {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      };

      const res = await chai.request(app).post('/api/topics?api-key=test_application').send(topic);

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('title');
      res.body.errors.title.should.have.property('kind').eql('required');
    }).timeout(20000);

    it('it should POST a topic ', async () => {
      const topic = {
        title: 'Find a study partner',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      };

      const res = await chai.request(app).post('/api/topics?api-key=test_application').send(topic);

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message').eql('topic successfully added');
      res.body.topic.should.have.property('author');
      res.body.topic.should.have.property('title');
      res.body.topic.should.have.property('datePosted');
      res.body.topic.should.have.property('body');
    }).timeout(20000);
  });

  describe('/GET/:id topic', () => {
    it('it should GET a topic by the given id', async () => {
      const topic = new Topic({
        author: new User({ googleID: 'application test', name: { first: 'John', last: 'Doe' } }),
        title: 'Best learning resources',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        datePosted: new Date()
      });

      await topic.save();

      const res = await chai
        .request(app)
        .get('/api/topics/' + topic._id + '?api-key=test_application')
        .send(topic);

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('author');
      res.body.should.have.property('title');
      res.body.should.have.property('datePosted');
      res.body.should.have.property('body');
      res.body.should.have.property('_id').eql(topic.id);
    }).timeout(20000);
  });

  // PUT route not yet created
  // describe('/PUT/:id topic', () => {
  //   it('it should UPDATE a topic given the id', done => {
  //     let topic = new Topic({
  //       title: 'The Chronicles of Narnia',
  //       author: 'C.S. Lewis',
  //       year: 1948,
  //       pages: 778
  //     });
  //     topic.save((err, topic) => {
  //       chai
  //         .request(app)
  //         .put('/topic/' + topic.id)
  //         .send({ title: 'The Chronicles of Narnia', author: 'C.S. Lewis', year: 1950, pages: 778 })
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('message').eql('Topic updated!');
  //           res.body.topic.should.have.property('year').eql(1950);
  //           done();
  //         });
  //     });
  //   });
  // });

  // DELETE route not yet created
  // describe('/DELETE/:id topic', () => {
  //   it('it should DELETE a topic given the id', done => {
  //     let topic = new Topic({
  //       title: 'The Chronicles of Narnia',
  //       author: 'C.S. Lewis',
  //       year: 1948,
  //       pages: 778
  //     });
  //     topic.save((err, Topic) => {
  //       chai
  //         .request(app)
  //         .delete('/topic/' + topic.id)
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('message').eql('Topic successfully deleted!');
  //           res.body.result.should.have.property('ok').eql(1);
  //           res.body.result.should.have.property('n').eql(1);
  //           done();
  //         });
  //     });
  //   });
  // });
});

////////////////////////

// Load application
describe('Server application', function () {
  describe('Client errors', function () {
    it('should 400 when api key is not present', function (done) {
      chai
        .request(app)
        .get('/api')
        .end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 401 when an invalid api key is used', function (done) {
      chai
        .request(app)
        .get('/api/users?api-key=invalid')
        .end(function (err, res) {
          res.should.have.status(401);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 without routes', function (done) {
      chai
        .request(app)
        .get('/?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 with undefined route', function (done) {
      chai
        .request(app)
        .get('/data/stories?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 with undefined API route', function (done) {
      chai
        .request(app)
        .get('/api/stories?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('Successful responses', function () {
    it('should get all the users', function (done) {
      chai
        .request(app)
        .get('/api/users?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });

    it('should get all topics from one author', function (done) {
      chai
        .request(app)
        .get('/api/user/Alejandro/topics?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    });

    it('should return the current user', function (done) {
      chai
        .request(app)
        .get('/auth/current_user')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
