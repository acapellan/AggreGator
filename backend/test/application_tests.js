// https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai

// During testing, the env variable is set to test
process.env.NODE_ENV = 'test';

// Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');
const Topic = mongoose.model('topics');

chai.use(chaiHttp);

// Database enabled tests
describe('Topics', function () {
  // empty the database before each test
  beforeEach(function (done) {
    Topic.deleteMany({}, function (err) {
      done();
    });
  });

  describe('/GET topics', function () {
    it('it should GET all the topics', function (done) {
      chai
        .request(app)
        .get('/api/topics?api-key=test_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST topics', function () {
    it('it should not POST a topic without title field', function (done) {
      const topic = {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      };

      chai
        .request(app)
        .post('/api/topics?api-key=test_application')
        .send(topic)
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('title');
          res.body.errors.title.should.have.property('kind').eql('required');
          done();
        });
    });

    it('it should POST a topic ', function (done) {
      const topic = {
        title: 'Find a study partner',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      };

      chai
        .request(app)
        .post('/api/topics?api-key=test_application')
        .send(topic)
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('topic successfully added');
          res.body.topic.should.have.property('author');
          res.body.topic.should.have.property('title');
          res.body.topic.should.have.property('datePosted');
          res.body.topic.should.have.property('body');
          done();
        });
    });
  });

  describe('/GET/:id topic', function () {
    it('it should GET a topic by the given id', function (done) {
      const topic = new Topic({
        author: new User({ googleID: 'application_test', nomen: { first: 'John', last: 'Doe' } }),
        title: 'Best learning resources',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        datePosted: new Date()
      });

      topic.save(function (err, topic, numberAffected) {
        chai
          .request(app)
          .get('/api/topics/' + topic._id + '?api-key=test_application')
          .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('author');
            res.body.should.have.property('title');
            res.body.should.have.property('datePosted');
            res.body.should.have.property('body');
            res.body.should.have.property('_id').eql(topic.id);
            done();
          });
      });
    });
  });
});

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
